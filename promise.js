// Pending: work in Progress 
// Fullfilled: successfully completed 
// Reject:
//.then:handle the result
//.catch:to handle the error

const promise=new Promise((resolve, reject)=>{setTimeout(()=>{
    resolve("found data");},2000);
});
    promise.then((result)=>{console.log(result);

});

// const promise=new Promise((resolve, reject)=>{setTimeout(()=>{
//     resolve("found data");},2000);
// });
//     promise
//     .then((result)=>{console.log(result);

// });
// .catch((error)=>)
