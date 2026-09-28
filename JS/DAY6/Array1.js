// Method of Array :- 
// 1. Push
// 2. pop 
// 3. shift 
// 4. unshift
// 5. slice 
// 6. splice 
// 7. indexOf()
// 8. includes()

// let arr = [1,2,3,'hy',true,100]
// console.log(arr[3]);
// console.log(arr[2]);


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// push :- add the element from the last 
// let arr = [1,2,3,'hy',true,100]
// arr.push(100,100)
// console.log(arr);

// pop :- remove the last element
// let arr1 = [1,2,3,'hy',true,100]
// console.log(arr1.pop());


// / shift :- remove the element from the begining.
// let arr2 = [1,2,3,'hy',true,100]
// // console.log(arr2.shift());
// let arrr= arr2.shift()
// console.log(arr2);
// console.log(arrr);


// unshift :- add the element from the begingin.
// let arr3 = [1,2,3,'hy',true,100]
// arr3.unshift(100,200,300)
// console.log(arr3);

// slice :- we can extract the partucular part of the array.
// Syntax :- slice(start index,end index) -> exclude 
// let arr4 = [1,2,3,'hy',true,100]
// console.log(arr4.slice(1,4))
// console.log(sl1);

// splice :- 
// Syntax :- splice(start index,deletCount,ele1,ele2,ele2)
// let arr5 = [1,2,3,'hy',true,100]
//  arr5.splice(1,3,1000,2000,3000,4000,5000)
// console.log(arr5);


// indexOf():- 
// let arr5 = [1,2,3,4,5,6,7]
// console.log(arr5.indexOf(6));

// includes :- check if element is exists or not.
// let arr6 = [1,2,3,4,5,6,7]
// console.log(arr6.includes(8));

// =======================================


// Iteration methods :- 
// 1. forEach 
// 2. for of
// 3. for in 
// 4. map
// 5. reduce
// 6. filter 
// 7. find
// 8. some 
// 9. every 
// 10. reverse
// 11. sort 

// forEach :- value , index and array 
// let arr6 = [1,2,3,4,5,6,7]
// arr6.forEach((value,index,array)=>{
//    console.log(value);
//    console.log(index);
//    console.log(array);
// })

// for of :- it returns the values.
// Array , String 
// let arr7 = [1,2,3,4,5,6,7]
// for(let value of arr7){
//     console.log(value);
// }

// let str = "hellodebugshala"
// for(let value1 of str){
//     console.log(value1);
// }


// for in :- it returns the index/keys.
// let arr8= [1,2,3,4,5,6]
// for(let index in arr8){
//     console.log(index);
// }


// let person = {
//     age :23,
//     address:"indore"
// }
// for(let keys in person){
//     console.log(keys);
// }

// =============================================

// map :-  it return the value in the new array.

// let arr9 = [1,2,3,4,5,6]
// let map1 = arr9.map((value)=>{
//     return value*2;
// })
// console.log(map1);

// filter :- it will return the element who satisfied the condition.
// let arr10 = [1,2,3,4,5,6]
// let filter1 = arr10.filter((v)=>{
//     return v%2==0
// })
// console.log(filter1);

// find :- return thef first occurence who satisfied the condition.
// let arr11 = [1,2,3,4,5,6,7]
// let find1 = arr11.find((v)=>{
//    return v%2==0
// })
// console.log(find1);

// findIndex :- 
// let arr11 = [1,2,3,4,5,6,7]
// let findIndex1 = arr11.findIndex((v)=>{
//    return v%2==0
// })
// console.log(findIndex1);

// reduce :- it will return single value.
// let arr12 = [1,2,3,4,5,6,7]
// let red = arr12.reduce((total,value)=>{ return total*value },0)
// console.log(red);

// some :- 
// let arr12 = [1,3,5,7,2]
// let some1 = arr12.some((value)=>{
//     return value%2==0;
// })
// console.log(some1);

// every :- sab kuch 
// let arr13 = [1,3,5,7,2]
// let every1 = arr13.every((value)=>{
//     return value%2==0;
// })
// console.log(every1);

// flat method 
// reverse 
// sort 
// fill

// let arr14 = [4,3,5,2,1,7]
// console.log(arr14.reverse());

// sort method :- 
// asc and desc
// let arr15 = [4,3,5,2,1,7]
// let sort1 = arr15.sort((a,b)=>{
//    return b-a;
// })
// console.log(sort1);
// positive -> swap 
// negative  -> no swap 

// flat :- nested array 
// let arr16 = [1,2,3,[4,5],100,[200,"hy"]]
// let flat1 =arr16.flat(Infinity)
// console.log(flat1);
// console.log(arr16.flat(Infinity));

// fill method :- Syntax :- (value,start,end) - end exclude 
// let arr17 = [1,2,3,4]
// let fill1 = arr17.fill(100,1,3)
// console.log(fill1);

// let arr18 = [1,2,3,6,4,7,8,9]
// let newArr = [];
// for(let i=0;i<arr18.length;i++){
//     newArr.unshift(arr18[i])
// }
// console.log(newArr);

// ==========================================
// Sort the array using the bubble sort :-

// let arr = [2,1,3,5,6,4]

// for(let i=0;i<arr.length;i++){ // i=0 0<6 T || i=1 1<6
//      for(let j=0;j<arr.length-1;j++){ // j=4  2<5 T
//         if(arr[j]>arr[j+1]){// arr[3]>arr[4] || 3>5
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//      }
// }
// console.log(arr);

// 2 1 3 5 6 4 
// 1 2 3 5 6 4
// 1 2 3 5 4 6 

// 1 2 3 4 5 6 

// c = a 
// a = b
// b = c

// find the occurence/frequency of the each element in the array.
// find the duplicate element from this array.
   let arr = [1,2,5,2,6,6,2,4,1,4,5,10]
// let arr = [1,2,5,2,6,6,2,4,1,4,5]
let newArr = [];
for(let i=0;i<arr.length;i++){//i=0
    let count=0; // 0
     for(let j=0;j<arr.length;j++){//j=0 ||j=1
          if(arr[i]==arr[j] && i>j){ 
            break;
          }
          if(arr[i]==arr[j]){
            count++;// 1// 2
          }
     }
     if(count>1){
        // console.log(arr[i]+ "duplicate element ");
         newArr.push(arr[i])
        
     }
}
      console.log(newArr);

// find the maximum element from the array.
// let arr = [1,4,2,65,34,87]
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);








