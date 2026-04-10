const express=require("express");
const app=express();

app.use((req, res, next) => {
    console.log("signup form")
    next()
})

app.get("/signup", (req, res) => {
    res.send("login form")
})

app.use((req, res) => {
    res.send("Route Executed")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})