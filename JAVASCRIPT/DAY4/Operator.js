// Types of operators :-
// 1. Arihtmetic Operator
//  + , - , * , / , %

// 2. Assignment Operator :-

// let a = a+10;
// a += 10;

// 3. Relational Operator

// > , < , >= , <=

// 4. Comparison Operator
//  == and ===

// 5. logical Operator :-
// && -> both condition satisfied
// || -> only one condition satisfy
// ! -> true -> false

// 6. ternary Operator

// Syntax :- Condition ? True : False

// 7. Increment/ Dcrement Operator

// pre incement / pre decre -> ++x , --x
// post incre / post decre -> x++ , x--

// typecasting :- Types

// ===============================================

// Arithmetic Operator

// let a = 10;
// let b = 20;

// console.log(a+b);
// console.log(b-a);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);

// ==========================

// Assignment Operator :-
// += , -= , *= , /= , %=

// let a = 10;
// // a = a+10;
//  a+=10;
// console.log(a);
// =============================

// Relational Operator :-

// let a = 10;
// let b = 20;
// let c = 10;

// console.log(a>b); // F
// console.log(a<c);// F
// console.log(a>=b);// F
// console.log(a<=c);// T

// ==============================

// Comparision Operator :- == and ===
// == :- It will check only the value.
// === :- It will check both only as well as datatype.

// let a = 10;
// let b = '10';
// let c = 20;

// console.log(a==b);// T
// console.log(a===b);// F

// ===============================

// Ternary Operator :-
// Syntax :- condition ? true : false

// let a = 20;
// let b = 100;

// console.log((a>b) ? "a is greater" : "b is greater");

// ==============================

// Logical Operator :-  And && , OR || , Not !

// && :- when both condition are satisfied then it will return true.
// || :- when only one condition are satisty then it will return true.
// Not ! :- it will returm the opposite result

// I1 I2 O       I1 I2 O     I1 O1 
// T  T  T       T  T  T      T   F
// T  F  F       T  F  T      F   T
// F  T  F       F  T  T
// F  F  F       F  F  F

// let a = 10;
// let b = 10;
// let c = 20;

// console.log(a>b && a<=c); // F
// console.log(b<c || a>=b);// T
// console.log(a!=10); // F

// =======================================

// Increment and Decrement Operator 

// preIncrement :-  
// let x = 10;
// let x1 = ++x;
// console.log(x1); // 11
// console.log(x);//11

// // postincrement :- 
// let y = 100;
// let y1 = y++;
// console.log(y1+100);//200
// console.log(y-100);//1


// Decrement pre :- 
// let z = 200;
// console.log(--z + z++ - ++z); // 199+199-201
// --z -> 200 -> 199
// z++ -> 199
// +z - 201

// decre post 
// let z1 = 200;
// let z2 = --z1 + z1++; // 199 + 199 = 398
// console.log(z2-100);//298
// console.log(z1+200);//400