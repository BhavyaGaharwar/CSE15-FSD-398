// Using Node.js built-in events module,create an EventEmitter. Register multiple listener's for a response event,
// then emit the event by passing name and id as arguments and display them in the console.


import EventEmitter from "events";
const myEmitter = new EventEmitter();

myEmitter.on("response", (name, id) => {
    console.log("Data received");
    console.log("Name:", name);
    console.log("ID:", id);
});

myEmitter.on("response", (name, id) => {
    console.log("Response event received");
});

myEmitter.emit("response", "Bhavya", 101);