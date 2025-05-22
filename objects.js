// let j = 10

const { useId } = require("react");

// function AddTwoNum (a,b){
//     let j = 5
// let result = a+b+j
// return result
// }

// console.log(AddTwoNum(8,9));
// function multiplyTwoNum (a,b){
//     result = a*b +j
//     return result
// }

// console.log(multiplyTwoNum(2,5));







// const student = {
// firstName:'Gloria',
// city:'Abuja',
// age:20
// }

// const entries = Object.entries(student)
// console.log(entries)

// const values = Object.values(student)

// console.log(values);


// const studentProps = Object.keys(student)
// console.log(studentProps);


// const dog={};
// console.log(dog);


    
// const dog={ 
//     name:"Bingo",
//     color: "white",
//     age:2,
//     bark:function () {
//         return "woof, woof"
//     }
// }
// console.log(dog);
// console.log(dog.bark());


//     console.log(dog.name);
//    console.log(dog.color);
//    console.log(dog.age);
// console.log(dog.bark);



// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }




// // const firstUser = users.Alex

// let mostSkilledPerson = ''
// let maxSkills = 0
//  for (const developer in users){
// const skillCount = users[developer].skills.length

// console.log(skillCount, developer);

// if (skillCount> maxSkills){
//     maxSkills=skillCount
//     mostSkilledPerson=developer
// }

//  }






//  console.log(` The person with the highest number of skills is ${mostSkilledPerson} with ${maxSkills} skills`)


// let usersWith50AndAbovePoints = 0
// let usersName=[]
//   for (const developer in users){
// const userPoints = users[developer].points



// if (userPoints>=50){
//     usersWith50AndAbovePoints++
//     usersName.push(developer);
// }

//  }


// console.log(`The names of the developers with 50 or more points are ${usersName.join(", ")}`)

// let skillCount=users.include("MERN")


// console.log(skillCount);

// const mernStack=[]

// for (const person in users){ 
//     const skills= users[person].skills
//     if (skills.includes('MongoDB') && (skills.includes('Express') )&& (skills.includes('Node') && (skills.includes("React"))) ){


//         mernStack.push(person)
//     }
    
// }

// console.log(mernStack)


// const Gloria={ 
//     name:"Asami Malik",
//     age:15,
//     location:"Abuja",
//     occupation:"Frontend developer",
// }



// const copiedUsers = Object.assign({Gloria}, users)
// console.log(copiedUsers);


// const keys=Object.keys(copiedUsers);
// console.log(keys);

// const allusers=Object.values(copiedUsers);
// console.log(allusers);





// const countri = {
//     Nigeria :{
//     Capital:"Abuja",
//     languages:["Hausa", "Igbo" ,  "Yoruba"],
//         population:123456789
//     },

//     Ghana:{ 
//      Capital:"Accra",
//      languages:["Fante", "Akuapem", "Ewe", "Ga", "Dagban"],
//      population:26790017


//     }
// }
//     for(const country in countri){

// const Capital=countri[country].Capital;
// const languages=countri[country].languages.join(' ,')
// const population=countri[country].population
//     console.log(`${country} capital is ${Capital} with a population of ${population} and speak these ${languages}`);
    
//     }
    
    
    

// const personAccount={ 
// firstName:"Gloria",
// lastName:"Malik",
// incomes:[],
// expenses:[],

// addIncome:function (description, amount) {
//   this.incomes.push({description:description, amount:amount});
// },

// addExpenses:function (description,amount) {
//   this.expenses.push({description:description, amount:amount});
  
// },
// totalIncome:function(){
//   let total=0;
//   for (let i = 0; i  < this. incomes.length; i++) {
//     total+= this.incomes[i].amount;
    
//   }
//   return total;
// },

// totalExpenses:function(){ 
//   let total=0
//   for (let i = 0; i < this. expenses.length; i++) {
//     total+= this.expenses[i].amount;
    
//   }
//   return total;
// },

// TotalBalance:function(){ 
//   return this.totalIncome() - this.totalExpenses()
// },

// accountInfo: function () {
//   return `${this.firstName} ${this.lastName} has:
// - Total Incomes: $${this.totalIncome()}
// - Total Expense: $${this.totalExpense()}
// - Balance: $${this.accountBalance()}`;
// }

// }

// personAccount.addIncome("salary", 50)
// personAccount.addExpenses("give away", 100)

// console.log(personAccount.accountInfo());


// const personAccount = { 
//   firstName: "Gloria",
//   lastName: "Malik",
//   incomes: [],
//   expenses: [],

//   addIncome: function (description, amount) {
//     this.incomes.push({ description: description, amount: amount });
//   },

//   addExpenses: function (description, amount) {
//     this.expenses.push({ description: description, amount: amount });
//   },

//   totalIncome: function () {
//     let total = 0;
//     for (let i = 0; i < this.incomes.length; i++) {
//       total += this.incomes[i].amount;
//     }
//     return total;
//   },

//   totalExpenses: function () {
//     let total = 0;
//     for (let i = 0; i < this.expenses.length; i++) {
//       total += this.expenses[i].amount;
//     }
//     return total;
//   },

//   accountBalance: function () {
//     return this.totalIncome() - this.totalExpenses();
//   },

//   accountInfo: function () {
//     return `${this.firstName} ${this.lastName} has:
// - Total Incomes: $${this.totalIncome()}
// - Total Expense: $${this.totalExpenses()}
// - Balance: $${this.accountBalance()}`;
//   }
// };

// // Correct function calls
// personAccount.addIncome("salary", 50);
// personAccount.addExpenses("give away", 100);

// console.log(personAccount.accountInfo());



//     let users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }

// ]

// function signUp(newUser) {
//   const userExists= users.some(users=> users.email ===newUser.email);
//   if (userExists) {
//     console.log("user already exist and has an account");
    
//   }
//   else{ newUser._id= Math.random().toString(36).slice(2);
//   newUser.createdAt= new Date() . toLocaleString();
//   newUser.isLoggedIn=false;
//   users.push(newUser)
//   console.log("User successfully sign up");
  
// }
// }
// signUp({
//   username: 'John',
//   email: 'john@example.com',
//   password: 'abc123'
// });




// function rateProduct(ProductId, UserId, ratings) {
//   const product=products.find(p=>p._id===ProductId)
//     if(product)
//       console.log("product not found");

//     const ExistRating=product.ratings.find(r=>r.userId===useId)
//     if(ExistRating){ 
//     ExistRating.rate=ratings
//     console.log("rating updated");
    
      

// }
// else{ 
//   product.ratings.push({userId,  rate: ratings});
//   console.log("rating added");
  
// }
// }