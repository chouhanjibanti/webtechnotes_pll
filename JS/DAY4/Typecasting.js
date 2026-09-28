console.log(10+10);//20 

// concatenation
console.log(10+"10");// number convert to string 
// 10 - "10"+"10" -> 1010
let a = 10+"10"
console.log(a);
console.log(typeof(a));

// type coercion
console.log(10-"10");// String convert to number  - 10-10
console.log(10*"5");//50
console.log("10"/"2");// 5

// ===============================

// Explicit Typecasting 

console.log(10+Number("10"));//20
console.log(String(10)-5);// "10"-5 = 10-5 

console.log(Number("100")/5);// 20