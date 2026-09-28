// Extract the digit from the number.

// let num = 564;
// while(num>0){// 564>0 T || 56>0 || 5>0  || 0>0
//    const digit = num%10; // 564%10=4 || 56%10=6 || 5%10=5
//    console.log(digit);// 4 // 6 // 5
//    num = Math.floor(num/10);// 564/10=56 || 56/10=5 // 5/10=0
// }

// =============   While Loop ================
//1. extract the digit from the number 5435.
//2. sum of all the digits where number is 34567.
//3. square of all the digits and sum this and display the number. 
//4. Find the largest digit in a given number using a while loop.  input number =  45732
//5. Count the number of digits in a number using a while loop. input number = 34543
//6. Calculate the factorial of a number using a while loop. input number = 10



// let num = 564;
// let n = num;
// let largest=0;
// while(num>0){// 564>0 T || 56>0 || 5>0  || 0>0
//    const digit = num%10; // 564%10=4 || 56%10=6 || 5%10=5
//   if(digit>largest){
//      largest = digit;
//   }
//    num = Math.floor(num/10);// 564/10=56 || 56/10=5 // 5/10=0
// }
// console.log("my largest digit is:",largest);

//6. Calculate the factorial of a number using a while loop. input number = 10

// factorial number :- 6 -> 6*5*4*3*2*1 = 720

// for loop :- 

// let fact =1 ;
// let num=6;
// for(let i=1;i<=num;i++){
//     fact = fact *i;
// }
// console.log(fact);


// =====================================

// Armstrong number find :- 
// Faboncci series
// Palindrome number


// Armstrong number 
// let num = 153  => 


    // ======================================


// palindrome number :- 
// 121 - 121 

// let num = 121;
// let rev = 0;
// let n =  num;
// while(num>0){// 121-1 // 121-2 // 121-1
//       const digit = num%10;
//       rev = (rev*10)+digit;// 1 // 12 //121
//       num = Math.floor(num/10)
// }
// if(n===rev){
//     console.log("Number is palindrome number");
// }else{
//     console.log("Number is not palindrome number");
// }


// faboncci series :- 
// 0 1 1 2 3 5 8 13 20

// for loop 
let a = 0;
let b = 1;
for(let i=1;i<=9;i++){ //i=1
    console.log(a);// 0 //1  // 1

    let temp = a+b;// 0+1=1 || 1+1=2
    a = b;// a = 1  || a=1
    b = temp;// b= 1 || b=2
}

