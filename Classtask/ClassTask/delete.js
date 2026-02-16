const express=require("express");
const app=express();
app.use(express.json());

let students=[
    {id:1,name:"Ankita",marks:90,city:"agra"},
    {id:2,name:"Anya",marks:80,city:"Delhi"},
    {id:3,name:"Annu",marks:70,city:"Banaras"}
];
// view student
app.get("/students",(req,res)=>{
    res.json(students);

});
// Delete remove student by id
app.delete("/students/:id",(req,res)=>{
    const id=req.params.id;
    const index=students.findIndex((s)=>s.id==id);
    if(index==-1){
        return res.status(404).json({message:"Student not found"});

    }
    const deleteStudent=students.splice(index,1);
    res.json({
        message:"Student deleted successfully",deleteStudent:deleteStudent[0]
    })
})
app.listen(8000,()=>{
    console.log("Server started succesfully");
})

