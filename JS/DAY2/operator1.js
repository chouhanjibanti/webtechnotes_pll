
// 1. Arithmetic operation -> + , - , / , * ,%


// 2. Assignment operator -> += , -= , /=, *=
//    let a = a +10; let a +=10;

// 3. Relational operator -> > , < ,>= , <=

// 4. Comparision -> == , ===

// 5. Logical operator -> && , || , !

// 6. ternary Operator -> 
//  Syntax :- Condition ? true : false 

// 7. incre/ decre operator -> 
//      preincre/postincre
//      predecre/postdecre


// ==============================


// Arithmetic :-

// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log(b-a);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);

// Assignment Operator += , -+
// let a = 100;
// let b = 20;

// let a = a+b;
// // console.log(a);

//  a-=b;
// console.log(a);

// ====================================

// Relational operator 

// let a = 10;
// let b = 20;
// let c = 10;

// console.log(a>b);// f
// console.log(b<c);// f
// console.log(a>=b);// f
// console.log(a<=c);// T

// Comparision
// == and ===
// == :- it will check only the values.
// === :- it will check both value as well as datatype.

// let a = 10;
// let b = '10';
// console.log(a==b);// T
// console.log(a===b);// f

// =======================================

// logical Operator - AND , OR and not 

// && -> when both conditions are true then only it will return true otherwise false
// || -> when any one condition is true then it will return true otherwise false
// ! -> True -> false == false -> true

// let a = 10;
// let b = 20;
// let c = 10;
// console.log(a>b && a<=c);// F
// console.log(b<=c || a==c);// T
// console.log(a!=10);// false


// ternary Operator :- we can check the condition in single line.

// Syntax :- 
//  condition ? true : false

// let a = 10;
// let b = 20;

// console.log(a>b ? "a ia greater" : "b is greater");

// =================================

// increment/decrement Operator 
// pre/post increment 
// pre/post  decrement 

// pre increment 
// let a = 10;
// let b = ++a;
// console.log(a);// 11
// console.log(b);// 11

// post increment 
// let x = 200;
// let y = x++;
// console.log(y);// 200 
// console.log(x);// 201

// pre / post decre

let x = 100;
let y = ++x - --x ; // 101 - 100 = 1
console.log(y+200-100);// 101
console.log(x+ 1 +200);//301









