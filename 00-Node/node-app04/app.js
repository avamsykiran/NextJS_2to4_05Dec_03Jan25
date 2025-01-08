import fs from 'fs';

const fnm = "xyz.txt";

fs.writeFile(fnm , "this is a test line being writtne into the file", err => {
    if(err){
        console.log(err);
    }else{
        console.log("File Saved!");

        fs.readFile(fnm, (err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log("The file content is: " + String(data));
            }        
        });        
    }
});
