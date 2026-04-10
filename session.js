const express = require("express");
const session = require("express-session");
const app = express();

// middleware
app.use(express.json());

// session set-up
app.use(
  session({
    secret: "mysecretkey", // encrypted secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    },
  }),
);

// Create login session
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy authentication
  if (username === "admin" && password === "123") {
    req.session.user = {
      username,
      role: "admin",
    };
    return res.json({
      msg: "Login Successful..",
      sessionId: req.sessionID,
    });
  }

  res.status(401).json({ msg: "Invalid credentials.." });
});

// Profile (Protected)
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "please login first" });
  }
  res.json({
    msg: "User Profile",
    user: req.session.user,
  });
});

// Dashboard (Protected)
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      msg: "Unauthorized user",
    });
  }
  res.send(`Welcome ${req.session.user.username}`);
});
l
// Logout (Destroy session)
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ msg: "Error logging out" });
    }
    res.clearCookie("connect.sid"); // default cookie name
    res.send("Logged out successfully");
  });
});

// Check session
app.get("/check-session", (req, res) => {
  if (req.session.user) {
    res.json({
      msg: "Session active",
      user: req.session.user,
    });
  } else {
    res.json({ msg: "No active session" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server started successfully");
});