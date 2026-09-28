Promises :- Promises is a javascript object , byusing this we can make asychronous code.It represent out task either complete(fullfilled) or failed(reject) in the future.It helps to write the code in the simple clean and readable way.

Stages of Promises :- 1
1. Pending 
2. Resolve 
3. Reject


methods of promises :- 
1. .then() :- when task is resolved , it will run.
2. .catch() :- when task is reject , that time this method will work.
3. .finally() :- always run ,doesn't matter task is resolved or not. - connection close 


Syntax :- 

Promise((res,rej)=>{

})

Synchronous 
1
2
3
4
5

Asynchronous
1
2
3
4
5


Async and await :- by using this we can make the async programming 

Aysnc :- it will return the promise , before the function 

async function Demo(){
   await fetch 
   await convert
}



try-catch :- Error handing 

try{

}catch(error){

}finally{
    
}