// let challenge="30 Days Of JavaScript";
// console.log(challenge);

// let challenge="30 Days Of JavaScript";
// console.log(challenge.length);

// let challenge="30 Days Of JavaScript";
// console.log(challenge.toLocaleUpperCase());

// let challenge="30 Days Of JavaScript";
// console.log(challenge.toLocaleLowerCase());


// let challenge="30 Days Of JavaScript";
// console.log(challenge.slice(3));

// let challenge="30 Days Of JavaScript";
// let sliced=challenge.slice(3);
// console.log(sliced );

// let string='30 Days Of JavaScript';
// let word=string.includes("Script");
// console.log(word);

// let string='30 Days Of JavaScript';
// let word=string.split(' ');
// console.log(word);

// let string="'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'";
// console.log(string.split());

// let string="30 Days Of JavaScript";
// console.log(string.replace('JavaScript', 'Python'));

// let string="30 Days Of JavaScript";
// console.log(string.charAt(15));

// let word="30 Days of JavaScript";
// console.log(word.charCodeAt(0));

// let word="30 Days of JavaScript";
// console.log(word.indexOf('a')); 

// let word="30 Days of JavaScript";
// console.log(word.lastIndexOf('a')); 


// let word ="'You cannot end a sentence with because because because is a conjunction'";
// console.log(word.indexOf('because'));


// let word ="'You cannot end a sentence with because because because is a conjunction'";
// console.log(word.lastIndexOf('because'));

// let string="You cannot end a sentence with because because because is a conjunction'"
// console.log(string.search('because'));

// let word=" ' 30 Days Of JavaScript'";
// console.log(word.trim());


// let word="30 Days Of JavaScript";
// console.log(word.startsWith(30));

// let word="30 Days Of JavaScript";
// console.log(word.endsWith('JavaScript'));

// let word="30 Days Of JavaScript";
// console.log(word.match(/a/g));


// let word="30 Days Of";
// console.log(word.concat( 'JavaScript  ' ));

// let string="30 Days Of JavaScript"
// console.log(string.repeat(2));

// let word="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
// console.log(word);


// let string="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
// console.log(string);




// let number = "10";
// let value = Number(number);
// console.log(value == 10);

// let num=parseFloat('9.8')
// let fixed=Math.round(num)
// console.log(fixed===10);

// let word1="Python"
// let word2="Jargon"
// console.log(word1.includes('on') && word2.includes('on'));

// let string ='I hope this course is not full of jargon';
// console.log(string.includes('jargon'));


// let num=Math.floor(Math.random() * 101)
// console.log(num);

// let num1=Math.floor(Math.random() * 51) +50;    
// console.log(num1);

// let num2= Math.floor(Math.random() * 256)
// console.log(num2);

// const word="JAVASCRIPT";
// const num4= Math.floor(Math.random() * word.length);
// const num5=word[num4]
// console.log(num5);


// let word2="You cannot end a sentence with because because because is a conjunction";
// let word3= word2.indexOf('because');
// let word4= word2.substr(word3, ' because because because'. length);
// console.log(word3);
// console.log(word4);


// let string='Love is the best thing in this world. Some found their love and some are still looking for their love';
// console.log(string.length);

// let word= "'You cannot end a sentence with because because because is a conjunction'";
// console.log(word.match(/because/g));


// const sentence= "'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'";
// let cleaned= sentence
//  .trim()                          
// .replace(/[^\w\s]/g, '')         
// .replace(/\s+/g, ' ')            
// .toLowerCase();       
// console.log(cleaned);


    let text="He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'";

    let num= text.match(/\d+/g). map(Number);

    let monthlysalary=num[0]
    let annualsalary=num[1]
    let onlinecourses=[2]


    let total= (monthlysalary + onlinecourses) * 12 + annualsalary;
    console.log("total annual income: €" + total);

    
    
    
    




