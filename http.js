// Write a Node.js  prgram to create a basic HTTP server that handles different URL routes. 
// The server should: Display "Home Page" when the user visits /.
// Display "About Homepage" when the user visits/about . 
// Return a 404 status code and display "Page not found" for nay invalid URL. 
// Provide a link to return to the Home Page on the 404 page. 
// Run the server on port 3000.

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } 
    else if (req.url === "/about") {
        res.end("About Homepage");
    } 
    else {
        res.statusCode = 404;
        res.end('Page not found <a href="/">Home</a>');
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});