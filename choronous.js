// Synchronous is a blocking architecture,
// so the the executionof each operation is dependent on the completion of the one before it 

function sum(){
    console.log("2");
}
function example(){
    console.log("1");
    sum();
    console.log("3");
}
example();

// Asynchronous is a non-blocking architectrure,
// so the execution of one task isn't dependent on another.
// Tasks can run simulataneously.

function sum(){
    setTimeout(()=>{ console.log("2");},2000);
}
function example(){
    console.log("1");
    sum();
    console.log("3");
}
example();