// Higher order function :- 

// hoF is a functioon , accept function as an paramter.

function Demo1(name){
   console.log(`${name}`);
}
function Demo(callback){
    callback("pranjal")
}
Demo(Demo1)