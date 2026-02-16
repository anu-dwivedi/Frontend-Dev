const fs=require("fs");
const readCopy=fs.ReadStream("./sample.txt");
const writeCopy=fs.WriteStream("./source.txt");
fs.appendFile();
writeCopy.pipe(
console.log("file copy")
