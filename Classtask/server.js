const http=require("http");
const myServer=http.createServer((re,res)=>{
    console.log("New Req rec.");
    res.end("Hello gadhii");
    const log =$(Data.now( ))


});
myServer.listen(8000,()=>console.log("Server Started"));