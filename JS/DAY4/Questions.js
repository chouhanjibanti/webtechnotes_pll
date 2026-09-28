// 1. prime number // 2 , 3  , 5 , 7, 11 ,13 , 17

// let num = 4;

// for(let i=2;i<=num;i++){// i=2 2<=4 T |i=3 3<=4 T |i=4 4<=4 T
//     let count =0; // count=0
//     if(num%i==0){ // 4%2==0 T // 4%3==0 F |4%4==0
//         count++; // 1  // 2
//     }
//     if(count==1){
//     console.log(num,"number is prime number");
// }else{
//     console.log(num,"Number is not prime number");
// }
// }

// Print prime number b/w 1 to 50 .

// for(let i=1;i<=50;i++){
//     let num = i;
//     let count =0;
// for(let i=2;i<=num;i++){// i=2 2<=4 T |i=3 3<=4 T |i=4 4<=4 T
//      // count=0
//     if(num%i==0){ // 4%2==0 T // 4%3==0 F |4%4==0
//         count++; // 1  // 2
//     }
// }
//  if(count==1){
//     console.log(num,"number is prime number");
// }else{
//     console.log(num,"Number is not prime number");
// }
// }


// 2. Armstrong number // 153  1*1*1 = 1   5*5*5 = 125  3*3*3 = 1+125+27 = 153


// let num = 154;
// let n = num;
// let sum = 0;
// while(num>0){
//     let digit = num%10;
//     sum = sum +digit*digit*digit;
//     num = Math.floor(num/10)
// }
// if(n===sum){
//    console.log(n, "Number is Armstrong");
// }else{
//     console.log(n,"Number is not Armstrong");
// }


// 3. Perfect number 
// 6 -> 1 +2+3 = 6  =>  14 -> 1+2+7 => 10 => 28 -> 1+2+4+7+14= 28

// let num =6;
// let sum =0;
// for(let i=1;i<=num/2;i++){
//     if(num%i==0){
//       sum = sum+i;
//     }
// }
// if(sum===num){
//     console.log(num,"Number is perfact number");
// }else{
//     console.log(num,"NUmber is not perfact number");
// }

// 5. Strong number    145 -> 1! =1    4!= 24 5!=120 => 1+24+120 => 145


// let num = 145;
// let n = num;
// // let sum = 0;
// while(num>0){
//     let digit = num%10;
//     sum = sum + isFact(digit);
//     num = Math.floor(num/10)
// }
// // console.log(sum);

// function isFact(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// if(n===sum){
//    console.log(n, "Number is Strong number");
// }else{
//     console.log(n,"Number is not Strong Number");
// }


// 6. Write a program to check if a given number is a palindrome.
// 121 -> 121

let num = 121;
let n = num;
let rev = 0;
while(num>0){ // 121>0 T|| 12>0 T || 1>0 T // 0>0
  let digit =  num%10;// 1 // 2 // 1
  rev = (rev*10)+digit;// rev = 1 || rev = 12 | rev = 121
  num = Math.floor(num/10)// 121 // 12 // 1 // 0
}
if(n===rev){
    console.log(n,"Number is palindrome number");
}else{
    console.log(n,"Number is not  palindrome number");
}


// Diff 
// Typescaating 
// conditional Statement 
// Operators 
// loops