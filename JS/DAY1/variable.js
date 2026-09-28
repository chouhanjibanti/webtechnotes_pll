// scope 

function Demo(){
    var a = 10;
    console.log(a);//10
    if(true){
        console.log(a);//10
    }
}
Demo();
console.log(a); // ReferenceError: a is not defined


// let block scope 
if(true){
    let b = 10;
    console.log(b);
}
console.log(b); // ReferenceError: b is not defined

// const - block 
if(true){
    const c = 100;
    console.log(c);
}
console.log(c);// ReferenceError: c is not defined

// =========================================

// Declaration
var a ;
let b;
const c ;

// ====================

// Reinit :- 

var a = 100;
a = 200;
console.log(a);

let b = 1000;
b = 2000;
console.log(b);

const c = 3000;
c = 5000;
console.log(c); // TypeError: Assignment to constant variable.

// when we creating the object , of the const type so we can reinit them.
const person = {
    name1: "lokesh", 
    age : 23
}
console.log(person.name1);
person.name1 = 'pranjal'
console.log(person.name1);
// ============================================

// Redeclaration 

var a = 10;
var a = 20;
console.log(a);

let b = 1000;
let b = 4000;
console.log(b);// SyntaxError: Identifier 'b' has already been declared

const c  =1 ;
const c = 2;
console.log(c);//SyntaxError: Identifier 'c' has already been declared

