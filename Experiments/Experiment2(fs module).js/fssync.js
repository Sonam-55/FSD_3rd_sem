const fs = require("node:fs");

// fs.writeFile("example.txt", "This is Experiment 2 in FSD Workshop", "utf8", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }

//     console.log("File created successfully");
// });
// const data=fs.readFile("example.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//     console.log("File contents:", data);
// });
// fs.appendFile("example.txt", "\nThis is the appended text.", "utf8", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//     console.log("Text appended successfully");
// });
// fs.unlink("student1.txt", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//     console.log("File deleted successfully");
// });
// fs.mkdirSync("newFolder", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//     console.log("Directory created successfully");
// });
// fs.rmdirSync("newFolder");
// console.log("Directory deleted successfully");
// if (!fs.existsSync("example.txt")) {
//     fs.writeFileSync("example.txt", "This is Experiment 2 in FSD Workshop", "utf8");
//     console.log("File exists");
// } else {
//     console.log("File does not exist");
// }

// 1. Create / Write File
fs.writeFileSync(
    "example.txt",
    "This is Experiment 2 in FSD Workshop",
    "utf8"
);
console.log("File created successfully");

// 2. Read File
const data = fs.readFileSync("example.txt", "utf8");
console.log("File contents:", data);

// 3. Append File
fs.appendFileSync(
    "example.txt",
    "\nThis is the appended text.",
    "utf8"
);
console.log("Text appended successfully");

// 4. Delete File
if (fs.existsSync("student1.txt")) {
    fs.unlinkSync("student1.txt");
    console.log("File deleted successfully");
} else {
    console.log("student1.txt does not exist");
}

// 5. Create Directory
if (!fs.existsSync("newFolder")) {
    fs.mkdirSync("newFolder");
    console.log("Directory created successfully");
} else {
    console.log("Directory already exists");
}

// 6. Delete Directory
if (fs.existsSync("newFolder")) {
    fs.rmdirSync("newFolder");
    console.log("Directory deleted successfully");
}

// 7. Check File Exists
if (fs.existsSync("example.txt")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}