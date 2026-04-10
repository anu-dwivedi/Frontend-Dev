const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

// DB connect
mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

// Schema + Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Logger Middleware
const logger = (req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next();
};
app.use(logger);

// Validation Middleware
const validate = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Name is required.." });
  }

  next();
};

// Admin Middleware
const checkAdmin = (req, res, next) => {
  const isAdmin = false;

  if (!isAdmin) {
    return res.status(403).json({ msg: "Access denied.." });
  }

  next();
};

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page..");
});

// Create User (DB save)
app.post("/user", validate, (req, res, next) => {
  const user = new User(req.body);
  user.save();
  res.json({
    msg: "User created successfully..",
    data: user,
  });
});

// get data from db
app.get("/user", async (req, res, next) => {
  const users = await User.find();
  console.log("Users from DB:", users);
});

// Admin route
app.get("/admin", checkAdmin, (req, res) => {
  res.send("Welcome admin..");
});

// Error Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ msg: "Internal Server Error" });
});





app.listen(5000, () => {
  console.log("Server running on port 5000");
});

