// backend/server.js
// Minimal Express backend with in-memory data for Expense Sharing app.
// Models: User, Group, Expense, Settlement
// Stores: users[], groups[], expenses[], settlements[]

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static files from ../frontend
// Set cache headers (prefer Cache-Control) for static assets to address issues/warnings
app.use((req, res, next) => {
  if (req.path.match(/\.(js|css|html)$/)) {
    // prefer Cache-Control, avoid relying on Expires
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  next();
});
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// In-memory data
let nextId = 1;
const users = []; // {id, name}
const groups = []; // {id, name, members: [userId]}
const expenses = []; // {id, groupId, description, amount, paidBy, participants, splitType, splitDetails}
const settlements = []; // {id, from, to, amount, groupId (optional)}

// Helpers
const genId = () => nextId++;
const findUser = id => users.find(u => u.id === id);
const findGroup = id => groups.find(g => g.id === id);

// ---- Users ----
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const u = { id: genId(), name };
  users.push(u);
  res.json(u);
});
app.get('/api/users', (req, res) => res.json(users));

// ---- Groups ----
app.post('/api/groups', (req, res) => {
  const { name, members } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const group = { id: genId(), name, members: Array.isArray(members) ? [...new Set(members)] : [] };
  groups.push(group);
  res.json(group);
});
app.get('/api/groups', (req, res) => res.json(groups));

app.post('/api/groups/:groupId/users', (req, res) => {
  const groupId = Number(req.params.groupId);
  const { userId } = req.body;
  const g = findGroup(groupId);
  if (!g) return res.status(404).json({ error: 'group not found' });
  if (!findUser(userId)) return res.status(404).json({ error: 'user not found' });
  if (!g.members.includes(userId)) g.members.push(userId);
  res.json(g);
});

// ---- Expenses ----
// splitType: 'equal' | 'exact' | 'percent'
// splitDetails: for 'exact' -> array of amounts; for 'percent' -> array of percents; for 'equal' -> ignored
app.post('/api/groups/:groupId/expenses', (req, res) => {
  const groupId = Number(req.params.groupId);
  const g = findGroup(groupId);
  if (!g) return res.status(404).json({ error: 'group not found' });
  const { description, amount, paidBy, participants, splitType, splitDetails } = req.body;
  if (!description || typeof amount !== 'number' || !paidBy || !Array.isArray(participants) || !splitType) {
    return res.status(400).json({ error: 'missing fields' });
  }
  if (!findUser(paidBy)) return res.status(404).json({ error: 'paidBy user not found' });
  for (const p of participants) if (!findUser(p)) return res.status(404).json({ error: `participant ${p} not found` });

  // validate splits
  if (splitType === 'exact') {
    if (!Array.isArray(splitDetails) || splitDetails.length !== participants.length) return res.status(400).json({ error: 'exact requires splitDetails for each participant' });
    const sum = splitDetails.reduce((s, v) => s + v, 0);
    if (Math.abs(sum - amount) > 0.01) return res.status(400).json({ error: 'exact split values must sum to amount' });
  }
  if (splitType === 'percent') {
    if (!Array.isArray(splitDetails) || splitDetails.length !== participants.length) return res.status(400).json({ error: 'percent requires splitDetails for each participant' });
    const sum = splitDetails.reduce((s, v) => s + v, 0);
    if (Math.abs(sum - 100) > 0.01) return res.status(400).json({ error: 'percent split values must sum to 100' });
  }

  const exp = { id: genId(), groupId, description, amount, paidBy, participants, splitType, splitDetails: splitDetails || [] };
  expenses.push(exp);
  res.json(exp);
});
app.get('/api/groups/:groupId/expenses', (req, res) => {
  const groupId = Number(req.params.groupId);
  res.json(expenses.filter(e => e.groupId === groupId));
});

// ---- Settlement ----
app.post('/api/settle', (req, res) => {
  const { from, to, amount, groupId } = req.body;
  if (!from || !to || typeof amount !== 'number' || amount <= 0) return res.status(400).json({ error: 'invalid settlement' });
  if (!findUser(from) || !findUser(to)) return res.status(404).json({ error: 'user not found' });
  if (groupId && !findGroup(groupId)) return res.status(404).json({ error: 'group not found' });
  const s = { id: genId(), from, to, amount, groupId: groupId || null };
  settlements.push(s);
  res.json(s);
});
app.get('/api/settlements', (req, res) => res.json(settlements));

// ---- Balances ----
// GET /api/balances?userId=1 -> returns net balances involving that user and per-user totals across all groups
// Optional groupId param to scope to a group
app.get('/api/balances', (req, res) => {
  const userId = req.query.userId ? Number(req.query.userId) : null;
  const groupId = req.query.groupId ? Number(req.query.groupId) : null;
  const data = computeBalances(groupId);
  if (userId) {
    // filter pairwise to entries involving user
    const userPairs = data.pairwise.filter(p => p.from === userId || p.to === userId);
    return res.json({ pairwise: userPairs, perUser: { [userId]: data.perUser[userId] || { owes: 0, owed: 0 } } });
  }
  res.json(data);
});

// compute balances (net) optionally scoped to group
function computeBalances(groupId = null) {
  // owes[u][v] = amount u owes v (positive means u owes v)
  const owes = {}; // nested maps
  const ensure = (u) => { if (!owes[u]) owes[u] = {}; };
  const add = (u, v, amt) => { if (u === v) return; ensure(u); owes[u][v] = (owes[u][v] || 0) + amt; };

  // Process expenses
  for (const e of expenses) {
    if (groupId && e.groupId !== groupId) continue;
    const parts = e.participants;
    if (e.splitType === 'equal') {
      const share = e.amount / parts.length;
      for (const p of parts) add(p, e.paidBy, share);
    } else if (e.splitType === 'exact') {
      for (let i = 0; i < parts.length; i++) add(parts[i], e.paidBy, e.splitDetails[i]);
    } else if (e.splitType === 'percent') {
      for (let i = 0; i < parts.length; i++) add(parts[i], e.paidBy, (e.splitDetails[i] / 100) * e.amount);
    }
  }

  // Apply settlements (reduce owes)
  for (const s of settlements) {
    if (groupId && s.groupId !== groupId) continue;
    add(s.from, s.to, -s.amount);
  }

  // Build user list
  const userSet = new Set(users.map(u => u.id));
  for (const a of Object.keys(owes)) {
    userSet.add(Number(a));
    for (const b of Object.keys(owes[a])) userSet.add(Number(b));
  }

  // Build pairwise net by canceling mutual owes
  const net = {};
  const userIds = Array.from(userSet);
  for (const a of userIds) {
    for (const b of userIds) {
      if (a === b) continue;
      const v1 = (owes[a] && owes[a][b]) || 0;
      const v2 = (owes[b] && owes[b][a]) || 0;
      const diff = v1 - v2;
      if (diff > 0.005) {
        const key = `${a}->${b}`;
        net[key] = { from: a, to: b, amount: Number(diff.toFixed(2)) };
      }
    }
  }

  const pairwise = Object.values(net);

  // per-user totals
  const perUser = {};
  for (const id of userIds) perUser[id] = { owes: 0, owed: 0 };
  for (const p of pairwise) {
    perUser[p.from].owes += p.amount;
    perUser[p.to].owed += p.amount;
  }
  for (const k of Object.keys(perUser)) {
    perUser[k].owes = Number(perUser[k].owes.toFixed(2));
    perUser[k].owed = Number(perUser[k].owed.toFixed(2));
  }

  return { pairwise, perUser };
}

// Seed small data for convenience
users.push({ id: genId(), name: 'Alice' });
users.push({ id: genId(), name: 'Bob' });
users.push({ id: genId(), name: 'Carol' });

const g = { id: genId(), name: 'Trip', members: [1, 2, 3] };
groups.push(g);

expenses.push({ id: genId(), groupId: g.id, description: 'Hotel', amount: 300, paidBy: 1, participants: [1, 2, 3], splitType: 'equal', splitDetails: [] });

const PORT = process.env.PORT || 4000;

// health endpoints to help diagnose connectivity and show process info
app.get('/api/ping', (req, res) => res.json({ status: 'ok', pid: process.pid, port: Number(PORT) }));
app.get('/api/status', (req, res) => res.json({ uptimeSeconds: process.uptime(), pid: process.pid, port: Number(PORT) }));

app.listen(PORT, () => console.log(`Expense backend listening on port ${PORT} (pid ${process.pid})`));
