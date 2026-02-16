const express = require('express');
const app = express();
const port = 3000;

// In-memory users array
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' }
];

// Middleware: Logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Middleware: JSON parser
app.use(express.json());

// Validation middleware for POST /users
const validateUser = (req, res, next) => {
  const { name, email, role } = req.body;
  if (!name || !email || !role) {
    return res.status(400).json({ error: 'Missing required fields: name, email, role' });
  }
  if (typeof name !== 'string' || name.length < 2) {
    return res.status(400).json({ error: 'Name must be a string with at least 2 characters' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  if (!['admin', 'user', 'moderator'].includes(role)) {
    return res.status(400).json({ error: 'Role must be admin, user, or moderator' });
  }
  next();
};

// GET /users - Fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id - Fetch user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST /users - Add new user (with validation)
app.post('/users', validateUser, (req, res) => {
  const { name, email, role } = req.body;
  const newId = Math.max(...users.map(u => u.id), 0) + 1;
  const newUser = { id: newId, name, email, role };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// DELETE /users/:id - Delete user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users.splice(index, 1);
  res.status(204).send();
});

// Error handling middleware (catch-all)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(8000, () => {
  console.log(`Server running at http://localhost:${8000}`);
});
