const fs = require("node:fs/promises");

async function writeFile() {
    try {
        await fs.writeFile("file.txt", "Hii, you are seeing the content of file.txt created using promises , async/await");
        console.log("File written successfully.");
    } catch (err) {
        console.log(err);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile("file.txt", "utf-8");
        console.log("File content:", data);
    } catch (err) {
        console.log(err);
    }
}
async function deleteFile() {
    try {
        await fs.unlink("file.txt");
        console.log("File deleted successfully.");
    } catch (err) {
        console.log("Error deleting file:", err);
    }
}


async function run() {
    await writeFile(); 
    await readFile();  
    await deleteFile();
}

run();
