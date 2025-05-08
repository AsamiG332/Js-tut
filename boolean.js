console.log(typeof('10')==(typeof(10)))

//  a= 10 , b= '10'
//  c= a+b
//  console.log(c);
// c = a + parseInt(b)
// console.log(c);

// console.log(parseFloat('9.8')==(10))

// a='9.8', b=10
// c=a+b
// console.log(c);
// c= a + parseFloat(b)
// console.log(parseFloat('9.8'))      
// console.log(Number('9.8'))
// console.log(Math.round(parseFloat('9.8')))

// let on=' python and jargon';
// console.log(on.includes('python'))
// console.log(on.includes('jargon'))

// let jargon='I hope this course is not full of jargon';
// console.log(jargon.includes('jargon'))

// let random=Math.random()
// let number=random *101
// console.log(number)
// let randomNumRoundToFloor=Math.floor(number)
// console.log(randomNumRoundToFloor)

// let random=Math.random()
// let number=random *51
// console.log(number)
// let randomNumRoundToFloor=Math.floor(number)
// console.log(randomNumRoundToFloor + 50)

// let random=Math.random()
// let number=random *251
// console.log(number)
// let randomNumRoundToFloor=Math.floor(number)
// console.log(randomNumRoundToFloor)

// let word='JavaScript';
// console.log(word.length)

// let random=Math.random()
// let number=random * word.length+1
// console.log(number)
// let randomNumRoundToFloor=Math.floor(number)
// console.log(randomNumRoundToFloor)
// console.log(word[randomNumRoundToFloor])
// console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

// let phrase='You cannot end a sentence with because because because is a conjunction';
// let start= phrase.indexOf('because because because');
// let result=phrase.substr(start,'because because because'.length);

// let name='Grace';
// let lastname='Darasimi';
// let country='Nigeria';
// let city='Abuja';   
// let age=31;
// let ismarried=false;
// let year=2024;

// console.log(typeof name);
// console.log(typeof lastname);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof ismarried);
// console.log(typeof year);

// console.log('10'===10);
// console.log(parseInt('9.8')===10);

// const Text = "hello";
// const Number = 123;
// const Object = {};
// console.log(Boolean(Text));
// console.log(Boolean(Number));
// console.log(Boolean(Object));

// const nothing=null;
// const number=0;
// const zero='';

// console.log(Boolean(nothing));
// console.log(Boolean(number));
// console.log(Boolean(zero));



// console.log( 4 > 3);
// console.log(4 >= 3);
//  console.log(4 < 3);
 
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');


// const pythonlength='python';
// const jargonlength='jargon';

// console.log(pythonlength.length);
// console.log(jargonlength.length);
// console.log(pythonlength < jargonlength);

// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log( 4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log(!(false));
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === '4'));

// const numbers=[33,2,8];
// numbers.sort();
// console.log(numbers[1]);
// console.log(1 + "2" + "2");
// console.log(typeof NaN);

// const word1 = "dragon";
// const word2 = "python";
// const searchString = "on";
// const noOnInDragon = !word1.includes(searchString);
// const noOnInPython = !word2.includes(searchString);
// const statementIsTrue = noOnInDragon && noOnInPython;
// console.log("Statement: There is no 'on' in both dragon and python");
// console.log("Is it true? " + statementIsTrue);

// let now= new Date(). getFullYear();
// console.log(now);

// let now=new Date()
// console.log(now.getMonth())


// let now=new Date()
// console.log(now.getDate())

// let now=new Date()
// console.log(now.getDay())

// let now=new Date()
// console.log(now.getHours())

// let now=new Date()
// console.log(now.getMinutes())

// let sec= Date .now() 
// console.log(sec)



// const myname = prompt("Gloria");

// if (myname) {
//   if (myname.length > 7) {
//     console.log("my name is long.");
//   } else {
//     console.log("my name is short.");
//   }
// } else {
//   console.log("no name was entered.");
// }

// let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';

// if (firstName.length > lastName.length) {
//   console.log(`Your first name, ${firstName}, is longer than your last name, ${lastName}.`);
// } else if (firstName.length < lastName.length) {
//   console.log(`Your last name, ${lastName}, is longer than your first name, ${firstName}.`);
// } else {
//   console.log(`Your first name, ${firstName}, and your last name, ${lastName}, have the same length.`);
// }

// let myAge = 250;
// let yourAge = 25;

// const ageDifference = myAge - yourAge;

// console.log(`I am ${ageDifference} years older than you.`);

// const currentYear = new Date().getFullYear();

// const Base=prompt('Enter Base ');
// const Height=prompt('Enter Height');
// const area=0.5*Base*Height
// alert(`The are of the triangle is ${area}`)


// const sideA=prompt("Enter side a");
// const sideB=prompt("Enter side b");
// const sideC=prompt("Enter side c");
// const perimeter=parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
// alert(`the perimeter is ${perimeter}`)


//pi r 2 
// const PI= Math.PI
// const R=prompt("Enter Radius")
// const Area=PI*R**2
// alert(`The area of a cycle is ${Area}`);





// let a=prompt("Enter any value");
// let isEven = a%2==0

// if(isEven){
//     alert("It's an even number")
// }else {
//     alert("it's an odd number")
// }