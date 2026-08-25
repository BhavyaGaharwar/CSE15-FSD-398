// const fs = require("fs");
// fs.readFile("xyz.js", "utf8", (err, data) => {
//     console.log(err,data);
//     console.log("File Content:", data);
// });
// console.log("File Reading finished");

// fs.appendFile("xyz.js", "console.log('Hello World!');", (err) => {
//     if (err) throw err;
//     console.log("Data appended to file!");
// });

// fs.writeFile("xyz.js", "console.log('Hello World!');", (err) => {
//     if (err) throw err;
//     console.log("File written successfully!");
// });

// fs.unlink("xyz.js", (err) => {
//     if (err) throw err;
//     console.log("File deleted successfully!");
// });

const fs = require("fs");

// Create
fs.writeFileSync("data.txt", "Hello Students");

// Read
console.log(fs.readFileSync("data.txt", "utf8"));

// Update
fs.appendFileSync("data.txt", "\nWelcome to Node.js");

// Read updated data
console.log(fs.readFileSync("data.txt", "utf8"));

// Delete
// fs.unlinkSync("data.txt");
// console.log("File Deleted");
