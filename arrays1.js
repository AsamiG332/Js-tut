// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// let country=countries.length-1
// countries[country] ="Ghana"
// console.log(countries);


// let fruits=['banana', 'orange', 'mango', 'lemon'];
// let fruit=fruits[0]
// console.log(fruit);

// let countries=["Nigeria", "Togo", "Ghana", "Benin", "Niger."]
// let word=countries[4]
// console.log(word);

// let names=["Blessing", "Gloria", "Darasimi", "Malik", "Grace", "Jerry", "Bishop", "Sarafina"]
// let name=names[1]
// console.log(name);

// const shoppingCart = [
//   'Milk',
//   'Mango',
//   'Tomato',
//   'Potato',
//   'Avocado',
//   'Meat',
//   'Eggs',
//   'Sugar'
// ]
// console.log(shoppingCart[5]);

// let text=Array(4).fill("Darasimi")
// console.log(text);

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdlist=firstList.concat(secondList)
// console.log(thirdlist);


// const fruits = ['banana', 'orange', 'mango', 'lemon']                 
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// const fruit=fruits.concat(vegetables)
// console.log(fruit);

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
// console.log(numbers.indexOf(4));

// const shopping = [
//   'Milk',
//   'Mango',
//   'Tomato',
//   'Potato',
//   'Avocado',
//   'Meat',
//   'Eggs',
//   'Sugar'
// ]
// console.log(shopping.indexOf(7));

// const word=Array()
// console.log(word);


// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// console.log(webTechs.length);

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// const first=webTechs[0]
// const middle= Math.floor(webTechs.length /2)
// const countrtindex=webTechs[middle]

// const last= webTechs(webTechs.length-1 )       

// console.log(first);
// console.log(countrtindex);
// console.log(last);

// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', "Mongo", "DB"];

// const first = webTechs[0]; 

// const middleIndex = Math.floor(webTechs.length / 2); 
// const middle = webTechs[middleIndex]; 

// const last = webTechs[webTechs.length - 1]; 

// console.log(first);        
// console.log(middle);       
// console.log(last);       

// const mixedDataTypes = [
//   'Hello',         
//   42,             
//   true,            
//   null,            
//   undefined,       
//   { name: 'Bob' }, 
//   [1, 2, 3]        
// ];

// console.log(mixedDataTypes);
// console.log(mixedDataTypes.length);



// console.log(itCompanies);
// console.log(itCompanies.length);

// const num=itCompanies[0];
// const middleIndex=Math.floor(itCompanies.length /2);
// const middle=itCompanies[middleIndex]
// const last=itCompanies[itCompanies .length-1]
// console.log(num);
// console.log(middle);
// console.log(last);

// const allcompany=itCompanies[0]
// const all=itCompanies[1]
// const allcompany1=itCompanies[2]
// const allcompany2=itCompanies[3]
// const allcompany3=itCompanies[4]
// const allcompany4=itCompanies[5]
// const allcompany5=itCompanies[6]
// const allcompany6=itCompanies[7]


// const itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// const companyuppercase=itCompanies.map(company=>company.toUpperCase());
// console.log(companyuppercase);



// const itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let company=prompt("Enter company to check");

// company=company.trim();
// if (itCompanies.includes(company)) {
//    alert(`${company} exist `) 
// }else{ 
//     alert(`${company} does not exist here`)
// }


// const companies = ['Google', 'Facebook', 'Microsoft', 'Apple', 'Amazon', 'Oracle'];
// const result = []; 

// for (let i = 0; i < companies.length; i++) {
//   let name = companies[i];  
//   let count = 0;            

//   for (let j = 0; j < name.length; j++) {
//     if (name[j].toLowerCase() === 'o') {  
//       count++;                            
//     }
//   }

//   if (count <= 1) {
//     result.push(name); 
//   }
// }

// console.log(result);  


// const companies = ['Google', 'Facebook', 'Microsoft', 'Apple', 'Amazon', 'Oracle'];
// // console.log(companies.sort());

// // companies.reverse()
// // console.log(companies);

// const out=companies.slice(0,3)
// console.log(out);

// const string=companies.slice(-3)
// // console.log(string);

// const companies = ['Google', 'Facebook', 'Microsoft', 'Apple', 'Amazon', 'Oracle'];
// const len = companies.length;

// let middle;

// if (len % 2 === 0) {
  
//   const mid1 = len / 2 - 1;
//   const mid2 = len / 2;
//   middle = companies.slice(mid1, mid2 + 1);
// } else {
  
//   const mid = Math.floor(len / 2);
//   middle = companies.slice(mid, mid + 1);
// }

// console.log(middle);


const companies = ['Google', 'Facebook', 'Microsoft', 'Apple', 'Amazon', 'Oracle'];
// const company=companies.splice(1);
// console.log(company);

// let word=companies.length;
// if (word%2===0) {
//     const start=word/2-1;
//     companies.splice(start,2)
// }else{ 
//     const start=Math.floor(word/ 2)
//     companies.splice(start,1)
// }

// console.log(companies);

// companies.pop()
// console.log(companies);

// companies.splice()
// console.log(companies);

// let words =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// let clean=words.replace (/[.,]/g, '');
// let text=clean.split()
// console.log(text)
// console.log(text.length)


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift("meat")
// console.log(shoppingCart);

// shoppingCart.push("sugar")
// console.log(shoppingCart);

// shoppingCart.pop()
// console.log(shoppingCart);

// shoppingCart[2]="Green Tea"
// console.log(shoppingCart);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

if (countries.includes("Ethiopia")) {
console.log("ETHIOPIA");

}else{ 
    countries.push("Ethiopia");
    console.log(countries);
    
}

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

if (webTechs.includes("Sass")) {
    console.log('Sass is a CSS preprocess');
    
    
}else{ 
    webTechs.push("Sass")
    console.log("webTechs");
    
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack=[frontEnd,backEnd]
console.log(fullstack);
