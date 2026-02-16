const express = require('express');
const app = express();


// Your existing in-memory users array (from prior projects)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'moderator' }
  // Add more as needed
];

// Middleware (logger and JSON parser from your prior code)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
app.use(express.json());

// New route: GET /users with optional ?name= query param for filtering
app.get('/users', (req, res) => {
  const nameFilter = req.query.name;  // Access query param [web:6][web:9]

  if (!nameFilter) {
    // Return all users if no filter
    return res.json(users);
  }

  // Filter users where name includes the query value (case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );  // [web:6][web:12]

  res.json(filteredUsers);  // Returns matching users or empty array
});

// Your other existing routes (e.g., POST /users, etc.) go here

app.listen(8000, () => {
  console.log(`Server running at http://localhost:${8000}`);
});
