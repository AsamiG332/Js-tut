// let challenge='30 Days Challenge Of JavaScript';
// console.log(challenge);
// let challenge='30 Days Challenge Of JavaScript';
// console.log(challenge.length);
// let challenge='30 Days Challenge Of JavaScript';
// console.log(challenge.toUpperCase())
// let challenge='30 days Challenge Of JavaScript';
// console.log(challenge.toLowerCase())
// let challenge='30 Days Challenge Of JavaScript';
// console.log(challenge.substr (0, 2));
// let challenge='30 Days Of JavaSCRIPT';
// console.log(challenge.substr(3,18))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.includes('Script'));
// let challenge='30 Day Of JavaScript';
// console.log(challenge.split(' '))
// let challenge='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(challenge.split(','))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.replace('JavaScript', 'Python'))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.charAt(15))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.charCodeAt('J'))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.indexOf('a'))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.lastIndexOf('a'))
// let challenge='You cannot end a sentence with because because because is a conjunction';
// console.log(challenge.indexOf('because'))
// let challenge='you cannot end a sentence with because because because is a conjunction';
// console.log(challenge.lastIndexOf('because'))
// let challenge='You cannot end a sentence with because because because is a conjunction';
// console.log(challenge.search('because'))
// let challenge='  30 Days Of JavaScript  '
// console.log(challenge.trim(' '))    
// let challenge='30 Days Of JavaScript';
// console.log(challenge.startsWith(30))
// 
// let challenge='30 Days Of JavaScript';
// console.log(challenge.match('a'))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.concat('Days', 'of', 'JavaScript'))
// let challenge='30 Days Of JavaScript';
// console.log(challenge.repeat(2))

// let adage='There is no exercise better for the heart than reaching down and lifting people up';
// console.log(adage);

// let speak="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
// console.log(speak);

//  console.log(typeof(true))


//  console.log(typeof('10')==(typeof(10)))

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

let word='JavaScript';
// console.log(word.length)

let random=Math.random()
let number=random * word.length+1
console.log(number)
let randomNumRoundToFloor=Math.floor(number)
console.log(randomNumRoundToFloor)
console.log(word[randomNumRoundToFloor])