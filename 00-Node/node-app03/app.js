import fs from 'fs';

fs.writeFileSync("abcd.txt" , "this is a test line being writtne into the file");
console.log("File Saved!");

var data = fs.readFileSync("abcd.txt");
console.log("The file content is: " + String(data));