// app.jsx - Minimal React UI (no build tool, uses CDN React + Babel)
const { useState, useEffect } = React;

function App(){
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [balances, setBalances] = useState(null);
  const [loadingExpenses, setLoadingExpenses] = useState(false);
  const [expenseError, setExpenseError] = useState('');
  const [expenseSubmitting, setExpenseSubmitting] = useState(false);
  const [settleError, setSettleError] = useState('');
  const [settleSubmitting, setSettleSubmitting] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState('');

  // forms
  const [name, setName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState([]);

  const [expDesc, setExpDesc] = useState('');
  const [expAmount, setExpAmount] = useState('');
  const [expPaidBy, setExpPaidBy] = useState('');
  const [expParticipants, setExpParticipants] = useState([]);
  const [splitType, setSplitType] = useState('equal');
  const [splitDetails, setSplitDetails] = useState([]);

  const [settleFrom, setSettleFrom] = useState('');
  const [settleTo, setSettleTo] = useState('');
  const [settleAmount, setSettleAmount] = useState('');
  const [settleGroup, setSettleGroup] = useState('');

  useEffect(()=>{ fetchAll(); },[]);
  useEffect(()=>{ if (selectedGroup){ fetchExpenses(selectedGroup.id); fetchBalances(selectedGroup.id); } },[selectedGroup]);

  // Keep splitDetails in sync with selected participants: maintain any entered values, and adjust length
  useEffect(()=>{
    const n = expParticipants.length;
    const next = Array.from({ length: n }, (_, i) => splitDetails[i] || '');
    setSplitDetails(next);
  }, [expParticipants]);

  function fetchAll(){
    fetch('/api/users').then(r=>r.json()).then(setUsers).catch(e=>console.error('fetch users',e));
    fetch('/api/groups').then(r=>r.json()).then(gs=>{ setGroups(gs); setSelectedGroup(s=>s || (gs && gs.length ? gs[0] : null)); }).catch(e=>console.error('fetch groups',e));
    fetch('/api/balances').then(r=>r.json()).then(setBalances).catch(e=>console.error('fetch balances',e));
  }
  function fetchBalances(groupId){
    fetch(`/api/balances?groupId=${groupId}`).then(r=>r.json()).then(setBalances).catch(e=>console.error('fetch balances', e));
  }

  function fetchExpenses(groupId){
    setLoadingExpenses(true);
    fetch(`/api/groups/${groupId}/expenses`)
      .then(r=>r.json())
      .then(data => { setExpenses(data); setLoadingExpenses(false); fetchBalances(groupId); })
      .catch(e => { console.error('fetchExpenses', e); setLoadingExpenses(false); });
  }

  async function addUser(e){ e.preventDefault(); if (!name) return; const res = await fetch('/api/users',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name})}); const u = await res.json(); setName(''); fetchAll(); }
  async function addGroup(e){ e.preventDefault(); if (!groupName) return; const payload = { name: groupName, members: groupMembers.map(Number) }; const res = await fetch('/api/groups',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); const g = await res.json(); setGroupName(''); setGroupMembers([]); setSelectedGroup(g); fetchAll(); }

  async function addExpense(e){
    e.preventDefault();
    setExpenseError('');
    if (!selectedGroup) { setExpenseError('Please select a group'); return; }
    if (!expDesc || !expAmount || Number(expAmount) <= 0) { setExpenseError('Provide a valid description and positive amount'); return; }
    if (!expPaidBy) { setExpenseError('Select who paid'); return; }
    if (!expParticipants || expParticipants.length === 0) { setExpenseError('Select at least one participant'); return; }

    if (splitType === 'exact'){
      const vals = splitDetails.map(Number);
      if (vals.length !== expParticipants.length) { setExpenseError('Enter exact amounts for each participant'); return; }
      const sum = vals.reduce((s,v)=>s+v,0);
      if (Math.abs(sum - Number(expAmount)) > 0.01) { setExpenseError('Exact split values must sum to total amount'); return; }
    }

    if (splitType === 'percent'){
      const vals = splitDetails.map(Number);
      if (vals.length !== expParticipants.length) { setExpenseError('Enter percent values for each participant'); return; }
      const sum = vals.reduce((s,v)=>s+v,0);
      if (Math.abs(sum - 100) > 0.01) { setExpenseError('Percent values must sum to 100'); return; }
    }

    setExpenseSubmitting(true);
    try {
      const payload = { description: expDesc, amount: Number(expAmount), paidBy: Number(expPaidBy), participants: expParticipants.map(Number), splitType, splitDetails: splitType==='equal' ? [] : splitDetails.map(Number) };
      const res = await fetch(`/api/groups/${selectedGroup.id}/expenses`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok){ const j = await res.json(); setExpenseError(j.error || 'Server error'); return; }
      await res.json();
      setExpDesc(''); setExpAmount(''); setExpParticipants([]); setSplitDetails([]);
      setNotifyMessage('Expense added'); setTimeout(()=>setNotifyMessage(''),3000);
      fetchExpenses(selectedGroup.id);
      fetchAll();
    } catch(err){ console.error('addExpense', err); setExpenseError('Network error while adding expense'); }
    finally{ setExpenseSubmitting(false); }
  }

  async function doSettle(e){ e.preventDefault(); const payload = { from: Number(settleFrom), to: Number(settleTo), amount: Number(settleAmount), groupId: settleGroup?Number(settleGroup):undefined }; const res = await fetch('/api/settle',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); if (!res.ok){ alert(await res.json().then(j=>j.error)); return; } setSettleAmount(''); fetchAll(); if (selectedGroup) fetchExpenses(selectedGroup.id); }

  // helpers for split inputs
  function handleSplitDetailChange(idx, val){ const next = [...splitDetails]; next[idx] = val; setSplitDetails(next); }

  return (
    <div style={{padding:20}}>
      <h1>Expense Splitter (Minimal React)</h1>
      {notifyMessage && <div role="status" aria-live="polite" style={{background:'#e6ffed',padding:8,border:'1px solid #b7f0c0',marginBottom:12}}>{notifyMessage}</div>}
      <div className="container">
        <div className="col small">
          <h2>Users</h2>
          <form onSubmit={addUser} aria-label="Create user">
            <label htmlFor="userName">Name</label>
            <input id="userName" name="userName" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
            <button type="submit">Create</button>
          </form>
          <ul>{users.map(u=> <li key={u.id}>{u.name} (id:{u.id})</li>)}</ul>

          <h2>Groups</h2>
          <form onSubmit={addGroup} aria-label="Create group">
            <label htmlFor="groupName">Group name</label>
            <input id="groupName" name="groupName" value={groupName} onChange={e=>setGroupName(e.target.value)} placeholder="Group name" />
            <label htmlFor="groupMembers">Members (ctrl+click):</label>
            <select id="groupMembers" name="groupMembers" multiple value={groupMembers} onChange={e=> setGroupMembers(Array.from(e.target.selectedOptions).map(o=>o.value))}>
              {users.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
            <button type="submit">Create Group</button>
          </form>
          <ul>{groups.map(g=> <li key={g.id}><a href="#" onClick={(ev)=>{ev.preventDefault(); setSelectedGroup(g);}}>{g.name}</a> (members: {g.members.join(',')})</li>)}</ul>
        </div>

        <div className="col medium">
          <h2>Selected Group</h2>
          <div>{selectedGroup? `${selectedGroup.name} (id:${selectedGroup.id}) members: ${selectedGroup.members.join(',')}` : 'No group selected'}</div>

          <h3>Add Expense</h3>
          <form onSubmit={addExpense} aria-label="Add expense">
            <label htmlFor="expDesc">Description</label>
            <input id="expDesc" name="expDesc" value={expDesc} onChange={e=>setExpDesc(e.target.value)} placeholder="Description" required />
            <label htmlFor="expAmount">Amount</label>
            <input id="expAmount" name="expAmount" value={expAmount} onChange={e=>setExpAmount(e.target.value)} type="number" step="0.01" placeholder="Amount" required />
            <label htmlFor="expPaidBy">Paid by</label>
            <select id="expPaidBy" name="expPaidBy" value={expPaidBy} onChange={e=>setExpPaidBy(e.target.value)}>
              <option value="">Select</option>
              { (selectedGroup?selectedGroup.members:users.map(u=>u.id)).map(id=>{ const u = users.find(x=>x.id===id); return <option key={id} value={id}>{u?u.name:`User ${id}`}</option> }) }
            </select>
            <label htmlFor="expParticipants">Participants (ctrl+click)</label>
            <select id="expParticipants" name="expParticipants" multiple value={expParticipants} onChange={e=>setExpParticipants(Array.from(e.target.selectedOptions).map(o=>o.value))}>
              { (selectedGroup?selectedGroup.members:users.map(u=>u.id)).map(id=>{ const u = users.find(x=>x.id===id); return <option key={id} value={id}>{u?u.name:`User ${id}`}</option> }) }
            </select>
            <label htmlFor="splitType">Split type</label>
            <select id="splitType" name="splitType" value={splitType} onChange={e=>{ setSplitType(e.target.value); setSplitDetails([]); }}>
              <option value="equal">Equal</option>
              <option value="exact">Exact</option>
              <option value="percent">Percent</option>
            </select>
            { (splitType!=='equal') && (
              <div>
                <p>Enter values for each selected participant in the same order:</p>
                {expParticipants.map((p,idx)=>{
                  const u = users.find(x=>x.id===Number(p));
                  return (
                    <div key={p}>
                      <label htmlFor={`split-${p}`}>{u?u.name:`User ${p}`}</label>
                      <input id={`split-${p}`} name={`split-${p}`} value={splitDetails[idx]||''} onChange={e=>handleSplitDetailChange(idx, e.target.value)} placeholder={splitType==='percent'?'percent':'amount'} />
                    </div>
                  );
                })}
              </div>
            )}
            {expenseError && <div role="alert" aria-live="assertive" style={{color:'#b00020',marginTop:8}}>{expenseError}</div>}
            <button type="submit" disabled={expenseSubmitting}>{expenseSubmitting ? 'Adding…' : 'Add Expense'}</button>
          </form>

          <h3>Expenses</h3>
          {loadingExpenses ? <div>Loading expenses…</div> : (
            <ul>
              {expenses.length === 0 ? <li>No expenses for this group</li> : expenses.map(ex => {
                const payer = users.find(u=>u.id===ex.paidBy);
                return (
                  <li key={ex.id}>
                    <strong>{ex.description}</strong> — <span className="expense-amount">{Number(ex.amount).toFixed(2)}</span> — paid by {payer ? payer.name : `User ${ex.paidBy}`} — split: {ex.splitType}
                  </li>
                );
              })}
            </ul>
          )} 
        </div>

        <div className="col large">
          <h2>Balances</h2>
          <button type="button" onClick={()=>fetchAll()}>Refresh</button>
          <div style={{whiteSpace:'pre-wrap',background:'#f7f7f7',padding:8}}>
            {balances ? (
              <div>
                <h4>Pairwise</h4>
                {balances.pairwise.map(p=> {
                  const fromU = users.find(u=>u.id===p.from);
                  const toU = users.find(u=>u.id===p.to);
                  return <div key={`${p.from}-${p.to}`}>{fromU?fromU.name:`User ${p.from}`} owes {toU?toU.name:`User ${p.to}`}: {p.amount}</div>;
                })}
                <h4>Totals</h4>
                {Object.keys(balances.perUser).map(uid => {
                  const u = users.find(x=>x.id===Number(uid));
                  return <div key={uid}>{u?u.name:`User ${uid}`} owes {balances.perUser[uid].owes} / is owed {balances.perUser[uid].owed}</div>;
                })}
              </div>
            ) : 'No balances yet'}
          </div>

          <h3>Settle</h3>
          <form onSubmit={doSettle} aria-label="Settle amounts">
            <label htmlFor="settleFrom">From</label>
            <select id="settleFrom" name="settleFrom" value={settleFrom} onChange={e=>setSettleFrom(e.target.value)}>
              <option value="">From</option>
              {users.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
            <label htmlFor="settleTo">To</label>
            <select id="settleTo" name="settleTo" value={settleTo} onChange={e=>setSettleTo(e.target.value)}>
              <option value="">To</option>
              {users.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
            <label htmlFor="settleAmount">Amount</label>
            <input id="settleAmount" name="settleAmount" value={settleAmount} onChange={e=>setSettleAmount(e.target.value)} placeholder="Amount" />
            <label htmlFor="settleGroup">Group (optional)</label>
            <select id="settleGroup" name="settleGroup" value={settleGroup} onChange={e=>setSettleGroup(e.target.value)}>
              <option value="">(none)</option>
              {groups.map(g=> <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
            {settleError && <div role="alert" aria-live="assertive" style={{color:'#b00020',marginTop:8}}>{settleError}</div>}
            <button type="submit" disabled={settleSubmitting}>{settleSubmitting ? 'Settling…' : 'Settle'}</button>
          </form>

        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
