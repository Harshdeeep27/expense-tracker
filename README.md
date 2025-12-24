# Expense Splitter (Minimal)

Simple Expense Sharing app (Splitwise-like) with a minimal React frontend and Node/Express backend. Data is kept in-memory.

## How to run

1. Install dependencies for backend:
   cd backend
   npm install
2. Start backend: npm start
3. Open http://localhost:4000 in your browser (frontend is served statically by backend)

## Features
- Create users
- Create groups and add users
- Add expenses (equal / exact / percent split)
- View balances (net simplified)
- Settle balances between users

## API (basic)
- POST /api/users {name} -> create user
- GET /api/users -> list users
- POST /api/groups {name, members[]} -> create group
- POST /api/groups/:groupId/users {userId} -> add user to group
- POST /api/groups/:groupId/expenses {description, amount, paidBy, participants[], splitType, splitDetails[]}
- GET /api/groups/:groupId/expenses -> list group expenses
- POST /api/settle {from, to, amount, groupId?} -> record settlement
- GET /api/balances?userId?&groupId? -> get net balances (optionally scoped)

## Notes
- In-memory storage; restarting server clears data
- No authentication
- Minimal, intentionally simple code for learning/demo
