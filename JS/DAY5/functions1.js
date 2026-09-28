// let a ; // variable declaration 

// function Declaration:- 

// function Demo(){
//    console.log("hy i am demo function");
// }
// Demo()

// // implicit function :-
// function Demo(){
//    console.log("hy i am demo function");
// }



// // explicit function :- 
// function Demo1(){
//     return "hy i am demo1 function"
// }
// Demo()
// console.log(Demo1());


// function add(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// // add(10,20)
// console.log(add(10,200));

// ==========================

// function Expression :- 

// let a = 10;

// let Parent = function(){
//     console.log("hy i am parent function");
// }
// Parent()

// =====================================

// Arrow function :- reduce the code.

// let Child = () =>{
//     console.log("hy i am arrow function");
// }
// Child()

// factorial number
// let fact = (num)=>{
//   let fact = 1;
//   for(let i=1;i<=num;i++){
//     fact = fact*i;
//   }
//   return fact;
// }
// console.log(fact(6));

// armstrong number 153
// palidrone 151

// ===================================================================

// Arrow function :- code reduce 

// let Demo = () =>{
//   console.log("hy i am arrow function");
// }
// Demo()

// =============================================

// Nested function :- function inside function is known as nested function.

// function Parent(){
//    console.log("Hy i am parentfunction");

//    let Child = function(){
//           console.log("hy i am Child expression");
//    }

//    let Child1 = () =>{
//        console.log("hy i am child1 function");
//    }
//      Child();
//      Child1()
// }
// Parent();

// ========================================

// Higher order function :- higher order function is a function which accept 
// function as a paramter.


// function Demo(a){ // paramter - function creation time 

// }
// Demo(10) // argument - function calling time 


// Call back function :- call back function is a function who passed as 
// an arguremnt 



// function Parent(cbf){
//     console.log("hy i am higher order function");
//     cbf();
// }

// function Child(){
//   console.log("hy i am call back function");
// }
// Parent(Child)


// =======================================================

function MultipleGreet(cbf,num){
   console.log("Hello welcome");
   for(let i=1;i<=num;i++){
      cbf();
   }
}

function Greet(){
  console.log("Goodmorning");
}
MultipleGreet(Greet,100)

// Check number is largest using the arrow function.
// perfact number using the arrow function 