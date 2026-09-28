// const person = {
//     name1:"jayesh",
//     age:23
// }
// console.log(person);
// console.log(person.name1);
// console.log(person.age);

// we can modify the object 
// add key value 
// person.address = "indore";
// console.log(person);

// // update 
// person.name1 = "jay";
// console.log(person);

// // delete 
// delete person.age;
// console.log(person);


// ===========================================

// Object methods:- 

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Object.freeze(person);
// person.age = 34;
// console.log(person);

// =============================================

// const person = {
//     name1:"jayesh",
//     age:23
// }

// blueprint 
// this keyword :- point to the current object
// new :- object create 
// function Person(name1,age){
//     this.name1 = name1;
//     this.age = age;
// }
// let p = new Person("jayesh",23)
// let p1 = new Person("mohan dada",100)
// console.log(p.name1);
// console.log(p1.name1);

// ===================================

// After Es6+

// class :- name of the program
// constructor :- when object is created  using new keyword constructor called automatically.
// this :- point to the current object.

// class Car{
//     constructor(name1,color,price){
//         this.name1 = name1;
//         this.color= color;
//         this.price = price;
//     }
// }
// let c = new Car("BMW","black",100000000)
// let c1 = new Car("fortuner","white",4000000)

// console.log(c);
// console.log(c1.price);


// let data = [
//    {name:"raja",id:1,address:"Indore"},
//    {name:"jayesh",id:2,address:"rau"},
//    {name:"khusi",id:3,address:"Bhopal"}
// ]
// // // find the address whose name is jayesh.

// let result = data.find(person => person.name === "jayesh")
// console.log(result.address);



// 2. Find All Employees from Indore

// An HR system stores employee details. Display all employees whose city is "Indore".

// let employees = [
//   { id: 101, name: "Raj", city: "Indore" },
//   { id: 102, name: "Ankit", city: "Bhopal" },
//   { id: 103, name: "Priya", city: "Indore" },
//   { id: 104, name: "Neha", city: "Delhi" }
// ];

// let result = employees.filter(employee => employee.city === "Indore")
// first way
// console.log(result[0].name);
// console.log(result[1].name);

// second way  || result = ["raj","priya"]
// for(let i=0;i<result.length;i++){
//     console.log(result[i].name);
// }


// 3. Increase Salary by 10%
// A company wants to give every employee a 10% salary hike. Update the salary of every employee.

// let employees = [
//   { id: 1, name: "Raj", salary: 30000 },
//   { id: 2, name: "Aman", salary: 45000 },
//   { id: 3, name: "Priya", salary: 50000 }
// ];

// let sal_incre = employees.map(employee => {
//     return {
//         ...employee,
//         salary : employee.salary-employee.salary*10/100
//     }
// })
// console.log(sal_incre);44



// 4. Find the Most Expensive Product

// An e-commerce website stores product details. Find the product with the highest price.

// let products = [
//   { id: 1, name: "Laptop", price: 60000 }, // max
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Mobile", price: 25000 },
//   { id: 4, name: "TV", price: 70000 }
// ];

// using the Method
// let expensiveProduct = products.reduce((max,product)=>{
//    return max.price>product.price ? max.price : product.price;
// })
// console.log(expensiveProduct);

// let expensiveProduct = products[0];

// for(let i=1;i<products.length;i++){
//     if( products[i].price>expensiveProduct.price){
//         expensiveProduct= products[i];
//     }
// }
// console.log(expensiveProduct.price);


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

let total_spent = orders.filter(order => order.customer === "Rahul")
                   .reduce((sum,order)=> { return sum+order.amount},0)
                   console.log(total_spent);