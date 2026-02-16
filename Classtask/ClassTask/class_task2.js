const express = require('express');
const app = express();
const port = 3000;

// Predefined users list [cite:1][cite:3]
const users = [
  { email: 'aman@gmail.com', password: '234' },
  { email: 'anya@gmail.com', password: '123' },
  { email: 'ankita@gmail.com', password: '456' }
];

// Middleware to parse JSON bodies [web:14]
app.use(express.json());

// Custom authentication middleware [web:5][web:7][web:8]
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // Dummy token validation - check against issued tokens or simple check
  // For demo, validate if token starts with 'dummy_' (generated below)
  if (!token.startsWith('dummy_')) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  // In production, store tokens in a set/map for validation
  next();
};

// POST /login route [web:6][web:12]
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate dummy token (no JWT) [web:7]
  const token = `dummy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  res.json({ message: 'Login successful', token });
});

// Protected routes [web:7][web:10]
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to Dashboard', data: 'Sensitive dashboard info' });
});

app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Profile data', profile: 'User profile details' });
});

// Logger middleware from Task 1 style [cite:1]
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Dashboard API running at http://localhost:${port}`);
});
