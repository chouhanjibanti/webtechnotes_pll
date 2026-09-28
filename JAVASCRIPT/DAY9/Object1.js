// const person = {
//      name1: "jayesh",
//      age:23
// }
// // console.log(person);
// // console.log(person.name1);

// // modification on the object 

// // add the key value 
// person.address = "Indore"
// console.log(person);

// // update
// person.name1 = "Ayush"
// console.log(person);

// // delete 
// delete person.age;
// console.log(person);

// // =================================================================

// Method of Object 
// const person = {
//      name1: "jayesh",
//      age:23
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// // freeze :- hold the data , we can not change this data.
// Object.freeze(person)
// person.age = 24;
// console.log(person);
// ==========================================

// const person = {
//      name1: "jayesh",
//      age:23
// }
// this keyword :- point to the current object.

// // Blueprint
// function Person(name1,age){
//    this.name1 = name1;
//    this.age = age;
// }
// let p = new Person("jay",34)
// let p1 = new Person("ayush",23)
// console.log(p.name1);
// console.log(p1.age);

// ==============================================
// After ES6 :- 

// class :- 
// this :- point to the current object 
// constructor :- constructor called when object is created using the new keyword.

// class Car{
//     constructor(name1,color,price){
//         this.name1 =name1;
//         this.color = color;
//         this.price = price
//     }
// }
// let c = new Car("BMW","black",100000000000);
// let c1 = new Car("fortuner","white",4000000);

// console.log(c.name1);
// console.log(c1.name1);


// let data = [
//    {name:"raja",id:1,address:"Indore"},
//    {name:"jayesh",id:2,address:"rau"},
//    {name:"khusi",id:3,address:"Bhopal"}
// ]
// // find the address whose name is jayesh.

// let result = data.find(user=> user.name= "jayesh")
// console.log(result.address);



// 2. Find All Employees from Indore

// An HR system stores employee details. Display all employees whose city is "Indore".

// let employees = [
//   { id: 101, name: "Raj", city: "Indore" },
//   { id: 102, name: "Ankit", city: "Bhopal" },
//   { id: 103, name: "Priya", city: "Indore" },
//   { id: 104, name: "Neha", city: "Delhi" }
// ];

// let filter1 = employees.filter(employee => employee.city === "Indore")
// // console.log(filter1);
// // filter1 = []
// // console.log(filter1[0].name);
// // console.log(filter1[1].name);

// for(let i=0;i<filter1.length;i++){
//     console.log(filter1[i].name);
// }


// 3. Increase Salary by 10%
// A company wants to give every employee a 10% salary hike. Update the salary of every employee.

// let employees = [
//   { id: 1, name: "Raj", salary: 30000 },
//   { id: 2, name: "Aman", salary: 45000 },
//   { id: 3, name: "Priya", salary: 50000 }
// ];

// let map1 = employees.map(employee => {
//     return {
//         ...employee,
//         salary : employee.salary+employee.salary*10/100,
//     }
// })
// console.log(map1);


// 4. Find the Most Expensive Product

// An e-commerce website stores product details. Find the product with the highest price.


// with method 
// let expensiveProduct = products.reduce((max,product)=>{
//     return product.price > max.price ? product : max;
// })
// console.log(expensiveProduct);

// for loop 
// let expensiveProduct = products[0];
// for(let i=1;i<products.length;i++){
//     if(products[i].price> expensiveProduct.price){
//         expensiveProduct = products[i].price
//     }
// }
// console.log(expensiveProduct);


// 5. Find Pending Tasks

// A task management application stores task details. Display only the tasks that are not completed.

// let tasks = [
//   { id: 1, title: "Learn JavaScript", completed: true },
//   { id: 2, title: "Build Todo App", completed: false },
//   { id: 3, title: "Practice Arrays", completed: false },
//   { id: 4, title: "Learn React", completed: true }
// ];



// 6. Total Amount Spent by Rahul
// Question :- 

let orders = [
  { id: 1, customer: "Rahul", amount: 1200 },
  { id: 2, customer: "Aman", amount: 800 },
  { id: 3, customer: "Rahul", amount: 2500 },
  { id: 4, customer: "Neha", amount: 1500 },
  { id: 5, customer: "Rahul", amount: 1000 }
];

let total = orders.filter(order => order.customer === "Rahul")
                 .reduce((sum,order1)=> sum+order1.amount,0)
                 console.log(total);