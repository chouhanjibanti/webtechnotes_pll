console.log("1");

setTimeout(()=>{
    console.log("2");
},0)

console.log("3");

queueMicrotask(()=>{
    console.log("4");
})

console.log("5");

Promise.resolve().then(()=>{
    console.log("6");
})

console.log("7");

console.log("8");

//1 3 5 7 8 4 6 2 