const EventEmitter= require("events");
const myEmitter= new EventEmitter();

//Event listener
myEmitter.on("click",()=> {
    console.logI("Button clicked!");
});

//Trigger the event
myEmitter.emit("click");

