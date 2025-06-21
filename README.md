# Assignment-3-Celebal-Internship
This is the assignment 3 of my Node js internship at celebal Technologies in which I have refactor an existing piece of code that uses callbacks for async operations to use Promises and Async/Await for better readability and error handling.
Existence piece of code which contained simple async/await callbacks:
And in index.js I have successfully converted this to promises Async/await 
const fs = require("fs");

function writeFile(callback) {
    fs.writeFile("file.txt", "Hii, you are seeing the content of file.txt created using callbacks", (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return callback(err);
        }
        console.log("File written successfully.");
        callback(null);
    });
}
function readFile(callback) {
    fs.readFile("file.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return callback(err);
        }
        console.log("File content:", data);
        callback(null);
    });
}

function deleteFile(callback) {
    fs.unlink("file.txt", (err) => {
        if (err) {
            console.log("Error deleting file:", err);
            return callback(err);
        }
        console.log("File deleted successfully.");
        callback(null);
    });
}
writeFile((err) => {
    if (!err) {
        readFile((err) => {
            if (!err) {
                deleteFile(() => {});
            }
        });
    }
});
