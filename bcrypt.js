const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { name, password, email } = req.body;

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Hashed:", hashPassword);

    // compare 
    const isValid = await bcrypt.compare(password, hashPassword);
    console.log("Match:", isValid);

    res.status(201).json({
      message: "User registered",
      hashedPassword: hashPassword,
      match: isValid
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});