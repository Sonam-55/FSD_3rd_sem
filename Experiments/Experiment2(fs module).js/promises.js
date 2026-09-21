const fs =require(`fs`).promises;
async function writefile() {
    try {
        await fs.writeFile("example1.txt", "This is Experiment 2 in FSD Workshop is present", "utf8");
        console.log("File created successfully");
    } catch (err) {
        console.log("Error:", err);
    }
}
await writefile();
async function readfile() {
    try { 
        const data = await fs.readFile("example1.txt", "utf8");
        console.log("File contents:", data);
    } catch (err) {
        console.log("Error:", err);
    }
}
try {
    const data = await fs.readFile("example1.txt", "utf8");
    console.log("File contents:", data);
} catch (err) {
    console.log("Error:", err);
}
async function appendfile() {
    try {
        await fs.appendFile("example1.txt", "\nThis is the appended text.", "utf8");
        console.log("Text appended successfully");
    } catch (err) {
        console.log("Error:", err);
    }
}
await appendfile();
async function deletefile() {
    try {
        await fs.unlink("example1.txt");
        console.log("File deleted successfully");
    } catch (err) {
        console.log("Error:", err);
    }
}