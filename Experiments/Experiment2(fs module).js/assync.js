const fs = require("node:fs");
fs.writeFile("example1.txt", "This is Experiment 2 in FSD Workshop is present", "utf8", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("File created successfully");
});
fs.readFile("example1.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    console.log("File contents:", data);
});
fs.appendFile("example1.txt", "\nThis is the appended text.", "utf8", (err) => {
    if (err) {
        console.log("Error appending to file:", err);
        return;
    } 
    console.log("Text appended successfully");
});
fs.unlink('sample.txt',(err)=>{
    if(err){
        console.log("Error deleting file:", err);
    }
});
