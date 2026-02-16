const express=require("express");
const app=express();
app.use(express.json());

let students=[
    {id:1,name:"Ankita",marks:90,city:"agra"}
]
app.post("/post")


//view students
app.get("/students",(req,res)=>{
    res.json(students);
});

//patch-update any one field (marks or city)

app.patch("/students/:id",(req,res)=>{
    const id=req.params.id;
    const update=req.body;
    const student=students.find((s)=> s.id==id);
    if(!student){
        return res.status(404).json({message: "Student not found"});
    }
    //apply partial update
    Object.assign(student,update);
    res.json({message:"student updated sucessfully"});
});
app.patch("/students/:id/active",(req,res)=>{
    const id=req.params.id;
    const{status}=req.body;
    
    if(!student){
        return res.status(404).json({message: "Student not found"});
    }
    //validate status
    if(status!=="active" && status!=="inactive"){
        return res.status(404).json({message:"Status must be active or inactive"});
    }
    student.status=status


    //udate only status
    res.json({
        message:"Student status updated sucessfully",
        student
    })
})







app.listen(8000,()=>{
    console.log("server started");
})