/// We can write the functions in two ways :- 
// implicit 
// explicit 

// implicit  way
// function Demo(){
//     console.log("Hy i am function declaration");
// }
// Demo()

// explicit  way
// function Demo(){
//     return "hy i am function declaration"
// }
// console.log(Demo());


// Arithmetic Operation using the function declaration 
// function Parent(a,b){// paramater 
//    console.log(a+b);
// }
// Parent(10,20)// argument 

// ===============================================

// function expression :- 

// let sum = function(a,b){
//     console.log(a+b);
// }
// sum(100,200)

// ==============================

// 1 WAP to print the factorial number of the 5 using the function declaration.
// 2. WAP to print the prime number b/w 1 to 50.


// function Fact(num){
//    let fact = 1;
//    for(let i=1;i<=5;i++){
//      fact = fact*i;
//    }
//    console.log(fact);
// }
// Fact(5)

// check number is armstrong or not. - 154
// check number is palindrome or not. - 181
// check number is perfact or not.- 17

// function Prime(a,b){
//    for(let i=a;i<=b;i++){
//       let count=0;
//       for(let j=2;j<=i;j++){
//         if(i%j==0){
//           count++;
//         }
//       }
//       if(count==1){
//         console.log(i,"number is prime");
//       }else{
//         console.log(i,"Number is not prime");
//       }
//    }
// }
// Prime(1,50)

// Arrow function :- we can write in the short way.

// let Demo = () =>{

// }
// Demo();


// ======================================

// Nested function :- 

// function Parent(){
//     console.log("hello i am parent function");

//     let Child1 = function(){
//         console.log("Hello i am child1 function");
//     }

//     let Child2 = () =>{
//         console.log("Hello i am child2 function");
//     }

//     Child1()
//     Child2()
// }
// Parent()

// ============================================

// Higher order function :- Higher order function is a function which accept function as an argument.

// Call Back function :- Call Back function is a function who passed as a parameter.

// function Parent(cbf){ // Higher order function
//     console.log("hy I am parent higher order function");
//     cbf();
// }

// function Child(){
//     console.log("Hy i am child function");
// }
// Parent(Child)

// function MultipleGreet(n,cbf){
//      for(let i=1;i<=n;i++){
//         cbf();
//      }
// }

// function Greet(){
//   console.log("goodmorning");
// }
// MultipleGreet(100,Greet)

