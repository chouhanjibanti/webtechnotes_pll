// let arr = [1,2,3,4]

// let arr1 = [4,5,6,7]

// let arr_arr1 =[...arr,...arr1]
// console.log(arr_arr1);


// let person = {
//     name1 :"lokesh",
//     age :23
// }

// let details = {
//     addresss :"indore",
//     phone : 23456765
// }

// let person_details = {...person,...details}
// console.log(person_details);

// ====================================================

// REst 
// let a ;
// let b = 10;

function Demo(a,b,...rest){
   console.log(a);
   console.log(b);
   console.log(rest);
}
Demo(10,20,3,4,5,6,7,8,9)

function Sum(...numbers){
   let sum1 =  numbers.reduce((total=0,number)=>  total+number)
   console.log(sum1);
}
Sum(1,2,3,4,5,6,7,8,9)


// hoisting 
// destructuring 
// local and session storage 

