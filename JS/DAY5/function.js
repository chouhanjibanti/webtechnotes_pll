// let a ;

// implicit and explicit
// function Demo(a,b){
//    console.log(a+b);
// }
// Demo(10,20);

// Explicit function
// function Demo1(a,b){
//    return a+b;
// }
// console.log(Demo1(10,20));

// ===========================================

// let a = 10;

// let Parent = function(){
//     console.log("hy i am function expression");
// }
// Parent()

// WAP to find the factorial of 6.

// ==========================================

// Arrow function :- we can write the code in short.

// let Child = () =>{
//     console.log("hy");
// }
// Child()

// perfect number 28
// Prime number 6

// let Perfact =(num) =>{
//     let sum =0;
//     for(let i=1;i<=num/2;i++){
//        if(num%i==0){
//         sum = sum+i;
//        }
//     }
//     if(num==sum){
//         console.log("Number is perfact number");
//     }
// }
// Perfact(28)

// ================================================

// function Parent(){

//     console.log("Hy i am parent function");

//     let Child1 = function(){
//         console.log("hy i am child function");
//     }

//     let Child2 = ()=>{
//         console.log("Hy i am Child2 function");
//     }
//     Child1()
//     Child2()
// }

// Parent()

// ==============================================

// Higher order function :- Higher order function is a function which accept function as an arguemnt .

// Call Back function :- call back function is  a function who passed as a paramater.

function Parent(cbf){// HOF
   console.log("hy i am higher order function");
   cbf("jay");
}

function Child(name1){
  console.log("hy i am Child function");
  console.log(name1," my name ");
}
Parent(Child)

// function MultipleGreet(num,cbf){
//     for(let i=1;i<=num;i++){
//         cbf()
//     }
// }
// function Greet(){
//     console.log("Goodmorning");
// }
// MultipleGreet(100,Greet)
