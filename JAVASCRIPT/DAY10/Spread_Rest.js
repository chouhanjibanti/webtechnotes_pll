// // spread Operator 
// let arr = [1,2,3,4]

// let arr1 = [5,6,7,8]

// let arr_arr1 = [...arr,...arr1]
// console.log(arr_arr1);


// const person= {
//     name1:"ayush",
//     age :23
// }

// const details = {
//     address:"indore",
//     phone:67898789
// }

// let personDetails = {...person,...details}
// console.log(personDetails);


// Rest Operator 

// function Demo(a,b,...rest){
//    console.log(a+b);
//    console.log(rest);
// }
// Demo(10,20,30,40,50,60)

function Sum(...numbers){
   return numbers.reduce((total=0,number)=> total+number)
//    console.log(numbers);
}
console.log(Sum(10,20,30,40,50,60,70));