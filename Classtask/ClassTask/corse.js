//----------------------------------------------------------------------------------------------------------------------------

//CORS

const cors=require("cors");
app.use(cors());

app.get("/data",(req,res)=>{
    res.json({message:"CORS working"})
});


// custom cors
//frontend allow
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