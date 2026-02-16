const express=require("express");
const app=express();
//Serve files from public directory 
 //absolute path:c/user/desktop/filename

 //relative path:./public
 app.use(express.static)