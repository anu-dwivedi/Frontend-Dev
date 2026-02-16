
const express = require("express");
const app = express();

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application-Level Middleware
app.use((req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  next(); // next middleware ya route pe bhejo
});

app.get("/home", (req, res) => {
  res.send("Welcome Home");
});

// Route-Level Middleware
const checkLogin = (req, res, next) => {
  const isLoggedIn = true; // assume

  if (!isLoggedIn) {
    return res.status(401).send("Please login first");
  }
  next();
};

app.get("/dashboard", checkLogin, (req, res) => {
  res.send("Welcome to Dashboard");
});

// Authentication Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Token required" });
  }

  if (token !== "akku") {
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
};

app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Profile data" });
});

// Error-Handling Middleware
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

app.use((err, req, res, next) => {
  console.error("Error Middleware:", err.message);
  res.status(500).json({
    message: "Internal Server Error",
  });

});
const cors=require("cors");
app.use(cors());

app.get("/data",(req,res)=>{
    res.json({message:"CORS working"})
});
app.use
    cors({
        origin:"http://localhost:8000",
    })

    //multiple frontend allow

    const allowedOrigins=[
        "http://localhost:8080/data",
        "http://localhost:8080/data"
    ];

    app.use(
        cors({
            origin:allowedOrigins,
        })
    )


app.listen(8000, () => console.log("Server Started"));