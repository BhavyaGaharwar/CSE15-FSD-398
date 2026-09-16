// Using Node.js built-in http module,create an http server that runs on port 3000 and returns a JSON response for every request 
// conatining id:1 and name:"laptop"


import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        id: 1,
        name: "laptop"
    }));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});