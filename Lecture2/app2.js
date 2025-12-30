console.log("start");
setTimeout(()=>{
    console.log("setTimeout callback");
}, 4000);

Promise.resolve().then(()=>{
    console.log("Promise callback");
});

console.log("end");

