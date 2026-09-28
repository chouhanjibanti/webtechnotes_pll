
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// let rows =5;
// let star=0;
// for(let i=1;i<=rows;i++){//i=1 1<=5 T ||i=2 2<=5 T
//     star++;// 1 // 2
//     space--;
//     let line = ''; // line=''
//       for(let j=1;j<=space;j++){//j=1 1<=2 T ||j=2 2<=2 T ||j=3 3<=2 F
//         line = line+" "; // line = * *
//     }
//     for(let j=1;j<=star;j++){//j=1 1<=2 T ||j=2 2<=2 T ||j=3 3<=2 F
//         line = line+"*"; // line = * *
//     }
//     console.log(line);
// }
// *
// * *



// let rows =4;
// let star=-1;
// let space =4;
// for(let i=1;i<=rows;i++){//i=1 1<=5 T ||i=2 2<=5 T
//     space++;// 1 // 2
//     star+=2;
//     let line = ''; // line=''
//       for(let j=1;j<=space;j++){//j=1 1<=2 T ||j=2 2<=2 T ||j=3 3<=2 F
//         line = line+" "; // line = * *
//     }
//     for(let j=1;j<=star;j++){//j=1 1<=2 T ||j=2 2<=2 T ||j=3 3<=2 F
//         line = line+"*"; // line = * *
//     }
//     console.log(line);
// }


12. 
//       *
//     * * *
//   * * * * * 
// * * * * * * * 

// star =1  -1+2 =1 
// star+=2;
// space =4;


//8
// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 

// for(let i=1;i<=5;i++){
//     let line = " "
//     for(let j=1;j<=5;j++){
//         if(i==1 || i==5 || j==1 ||j==5){
//             line = line+"*"
//         }else{
//             line = line+" "
//         }
//     }
//     console.log(line);
// }


//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *  
// -1+2 = 1
// spac =5


//4.
// 1
// 12
// 123
// 1234
// 12345


// for(let i=1;i<=5;i++){
//     let num=1
//     let line = ''
//     for(let j=1;j<=i;j++){
//         line = line + num;
//         num++;
//     }
//     console.log(line);
// }



//5.
// A
// AB
// ABC
// ABCD
// ABCDE

// A - 65
// a -97

// for(let i=1;i<=5;i++){
//     let charCode = 65;
//     let line = ''
//     for(let j=1;j<=i;j++){
//         line = line + String.fromCharCode(charCode);
//         charCode++;
//     }
//     console.log(line);
// }


// 12.
// a
// b c
// d e f
// g h i j