const express = require('express');
const app = express();
app.use(express.json());

const info=[
    {UserName: "anya23"},
    {Password:"Kanak@1401"},
    {Phone_Number: 9045719287}
]

app.get("/login",(req,res)=>{
    return res.send("welcome to login page");

})

app.post("/login/add",(req,res)=>{
    const data=res.send;
     info.push(info);
      return res.send("login sucessfully");
   
})
app.listen(5000,()=>{
    console.log("Server startes at 5000");
})
app.use(express.json());
let credentials=[
    {email:"john@email.com",password:"123"},
    {email:"alex@email.com",password:"456"},
];

app.get("auth/users",(req,res)=>{
    res.json({message:"user fetched successfully",credentials});
});

//reset password route
app.put("/auth/reset",(req,res)=>{
    const{email,password,newPassword}=req.body;
    //find user
    const user=credentials.find((cred)=>cred.email==email&&cred.password==password);
    if(!user){
        return res.status(400).json({message:"invalid email or password"})
    }
});