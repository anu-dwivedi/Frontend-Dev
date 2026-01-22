const fs=require("fs");
// const readstream =fs.createReadStream("./sample.txt",{
//     encodig:"utf-8",
//     highWaterMark:64*1024

// });
// readstream.on("data",(chunk)=>{
//     console.log("chunk received:",chunk.length);

// });
// readstream.on("end",()=>{
//     console.log("file reading complete");

// });
// const writeStream=fs.createWriteStream("./sample.txt");
// writeStream.write("Hello GLA\n");
// writeStream.write("gadhii");
// writeStream.end();

const readCopy = fs.createReadStream("./sample.txt");
const writeCopy = fs.createWriteStream("./copy.txt");

readCopy.pipe(writeCopy);  // magic! connects streams

readCopy.on("end", () => {
    console.log("copy complete");
});




