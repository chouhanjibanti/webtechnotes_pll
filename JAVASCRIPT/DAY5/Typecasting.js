// implicit Typecasting :- 

console.log(10+10);// 20  || both are number so we can add this.

console.log(10+"10");// when one number and one string is there in that case 
// number is converted to the string because both string will concatenated.

console.log(10-10);// 0
console.log(10-"10");// 0
//  type coercion -> String converted to the number

console.log(10*"5");//50
console.log("10"/"2");//5 

// ==============================================

// Explicit Typecasting :- 

console.log(10+Number("10"));//20
console.log("10"+Number("5"));


console.log(Number("100")-"5");