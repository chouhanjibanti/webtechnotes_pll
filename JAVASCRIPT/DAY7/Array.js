// let arr = [1,2,3,4,5,"hy",true]

// console.log(arr);
// console.log(arr[2]);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// ================================================

// Methods of Array :-  
// push 
// pop 
// shift 
// unshift
// splice 
// slice 
// include 
// indexOf
// concat --
// join --



// Iteration methods 
// foreach 
//for of 
// for in 
// find 
// findIndex
// sort 
// reverse
// map
// filter 
// reduce
// some 
// every 
// flat  -
// flatMap -
// fill -
// Array.from -
// toString  -

// push
// let arr1 = [1,2,3,4,5,6]
// arr1.push(7)
// console.log(arr1);

// // pop - remove from the last 
// let arr2 = [1,2,3,4,5,6]
// console.log(arr2.pop());

// // shift :- remove from the begining
// let arr3 = [1,2,3,4,5,6]
// console.log(arr3.shift());

// // unshift - add from the begining 
// let arr4 = [1,2,3,4,5,6]
// arr4.unshift(100,200,300)
// console.log(arr4);

// // slice :- we can extract the part of the array.
// // slice -> (start index,end index) - exclude 
// let arr5 = [1,2,3,4,5,6]
// let slice1 = arr5.slice(2,5)
// console.log(slice1);


// // splice :- we can replace the element in the place of the element.
// // Syntax :- splice(start index , deletCount, ele1 ,ele2)
// let arr6 = [1,2,3,4,5,6,7]
// arr6.splice(2,3,100)
// console.log(arr6);


// // include :- exist or not.
// let arr7 = [1,2,3,4,5,6]
// console.log(arr7.includes(15));


// // indexOf() -> It will retunn the index of the element.
// let arr8 = [1,2,3,4,5,6,7,8,9]
// console.log(arr8.indexOf(8));



// Iteration methods 

// forEach method :- it will return index , value , array 
// let arr9 = [1,2,3,4,5,6,7,8]

// arr9.forEach((value,index,array)=>{
//    console.log(value);
//    console.log(index);
//    console.log(array);
// })

// for of and for in method 
// // for of :- it will return the values. - array , String 
// let arr10 = [1,2,3,4,5,6,7,8]

// for(let value of arr10){
//     console.log(value);
// }


// let str = "debugshala";
// for(let value of str){
//     console.log(value);
// }


// for in :- index/keys    Array , object 
// let arr11 = [1,2,3,4,5,6,7,8]
// for(let i in arr11){
//     console.log(i);
// }

// let person = {
//     name1:"ronak",
//     age : 23,
//     address : "indore"
// }
// for(let keys in person){
//     console.log(keys);
// }

// map method :- it will return the new array.

// let arr11 = [1,2,3,4,5,6,7,8]

// let map1 = arr11.map((value)=>{
//    return value*2
// })
// console.log(map1);


// reduce :- it will return the single value. 

// let arr12 = [1,2,3,4,5,6,7,8]
// let red = arr12.reduce((total,value)=>{
//    return total+value;
// },0)
// console.log(red);

// filter :- it will return the filter element based on the condition.

// let arr13 = [1,2,3,4,5,6,7,8]
// let fil = arr13.filter((value)=>{
//    return value%2==0;
// })
// console.log(fil);

// find :- it will return the first occurence based on the condition.
let arr13 = [1,2,3,4,5,6,7,8]
let find1 = arr13.find((value)=>{
   return value%2==0;
})
console.log(find1);

// findIndex :- retrurn the index of the that element.
// let arr13 = [1,2,3,4,5,6,7,8]
// let findIn1 = arr13.findIndex((value)=>{
//    return value%2==0;
// })
// console.log(findIn1);


// some :- some element satisfied the condition.
//  let arr14 = [1,2,3,4,5,6,7,8]
// let some1 = arr14.some((value)=>{
//    return value%2==0;
// })
// console.log(some);


//  let arr15 = [1,2,3,4,5,6,7,8]
// let every1 = arr15.every((value)=>{
//    return value%2==0;
// })
// console.log(every1);


// // reverse() :- 
//  let arr16 = [1,2,3,4,5,6,7,8]
//  console.log( arr16.reverse());

// sort :-  sort the array ascending and descending order.
// let arr17 = [4,2,5,1,6,7,9]
// let sort1 = arr17.sort((a,b)=>{
//    return b-a;
// })
// console.log(sort1);
// positive // negative 

// let arr18 = [1,2,3,["hy","by",4,[100]]]
// let flat1 = arr18.flat(Infinity);
// console.log(flat1);



// let arr = [1,5,2,8,4,3]
// // bubble sort 

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr.length-1;j++){
//     if(arr[j]<arr[j+1]){
//         let temp = arr[j];
//         arr[j] =arr[j+1];
//         arr[j+1] = temp;
//     }
//   }
// }
//   console.log(arr);

  // find the occurence/frequency of each element.
//    let arr = [1,3,1,4,5,2,3,6,7,8,6,7]
// // let arr = [1,3,1,4,5,2,3,6,7,8,6,7]
// for(let i=0;i<arr.length;i++){
//   let count=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j] && i>j){
//         break;
//        }
//        if(arr[i]==arr[j] ){
//           count++;
//        } 
//     }
//     // if(count>0){
//     //   console.log(arr[i] +" occurence is",count);
//     // }
//      if(count>1){
//       console.log(arr[i] +" duplicate element");
//     }
// }





  // find the duplicte element from the aary.

  // Find the maximum element 

// let arr = [1,5,23,67,98,45]
// let max = arr[0];

// for(let i=1;i<arr.length;i++){
//      if(arr[i]>max){
//        max= arr[i];
//      }
// }

// console.log(max);








