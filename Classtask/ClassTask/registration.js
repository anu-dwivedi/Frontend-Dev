const express = require("express");
const app = express();

app.use(express.json());

// // Home
app.get("/", (req, res) => {
     res.send("Home Page");
 });

// // Registration array
 const registrations = [];

// // Registration API
 app.post("/register", (req, res) => {
     const data = req.body;

    registrations.push({
        name: data.name,
       email: data.email,
         password: data.password,
         branch: data.branch
     });

    res.send({
         message: "Registration Successful",
         data: registrations
     });
 });

// // View all registrations
 app.get("/register", (req, res) => {
     res.send(registrations);
});






// registration page 
const credentials=[
    {email:"aman@gmail.com",password:"234"},
    {email:"anya@gmail.com",password:"123"},
    {email:"ankita@gmail.com",password:"456"}
];

app.post("/auth/register",async(req,res)=>{
    const data=req.body;
    // check if the user already exit 
    const existinguser=credentials.find((cred)=>cred.email==data.email)
    if(existinguser)
    {
        return res.status(400).send("user alredy exist");
    }
    credentials.push(data);
    res.send("registration successful");
});


// login page 


app.post("/auth/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=credentials.find(
        (cred)=>cred.email ==email && cred.password==password
);
console.log(user);

    if(user){
        res.send({message:"login successfully",user});

    }
    else{
        res.send("invalid credential");
    }


});


app.use(express.json());
credentials.push(
    {email:"john@email.com",password:"123"},
    {email:"alex@email.com",password:"456"}
);

app.get("auth/users",(req,res)=>{
    res.json({message:"user fetched successfully",credentials});
})

//reset password route
app.put("/auth/reset",(req,res)=>{
    const{email,password,newPassword}=req.body;
    //find user
    const user=credentials.find((cred)=>cred.email==email&&cred.password==password);
    if(!user){
        return res.status(400).json({message:"invalid email or password"});
    }
    user.password=newPassword;
    res.json({message:"password reset successfully"});
});
// forgot password
app.put("/auth/forgotPassword",(req, res)=>{
    const {email, newPassword} = req.body;
    const user = credentials.find((cred) => cred.email === email);
    
    if(!user){
        return res.status(400).json({message:"Invalid email.."});
    }
    user.password = newPassword;
    res.json({message:"Password is reset sucessfully.."});
})


// reset email using password
app.put("/auth/resetEmail", (req, res) => {
    const { password, newEmail } = req.body;

    const user = credentials.find((cred) => cred.password === password);

    if (!user) {
        return res.status(404).json({ message: "Invalid password.." });
    }

    user.email = newEmail;
    res.json({ message: "Email updated successfully..", user });
});





app.listen(8000, () => {
    console.log("Server started on port 8000");
});

