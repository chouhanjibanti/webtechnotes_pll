console.log("1");

console.log("2");

setTimeout(() => {
     console.log("3");
}, 0);

console.log("4");

queueMicrotask(()=>{
   console.log("5");
})

console.log("6");

setTimeout(() => {
    console.log("7");
}, 0);

Promise.resolve().then(()=>{
    console.log("8");
})

console.log("9");

// 1 2 4 6 9 5 8 3 7 
// 
// 1 2 4 6 9 5 3 7 8 
