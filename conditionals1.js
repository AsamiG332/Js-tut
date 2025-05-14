// let age= prompt ("Enter Age");
// let now= new Date() .getFullYear()
// let word= now-Number(age)

// if(age > 8){ 
//     alert(`your age is ${word} .you are old enough to drive`)
// }else(age<18) 
//     alert(`you are ${word} . you are not old enough to drive` )


// let yourAge = prompt ("Enter your year")
// let myAge = prompt ("Enter your year")

// yourAge=Number(yourAge)
// myAge=Number(myAge)

// if(yourAge > myAge){ 
//     let diff=yourAge-myAge
//     alert(`you are ${diff} and you are older than me`)
// }else if(myAge>yourAge){ 
//     let diff=myAge-yourAge
//     alert(`i am ${diff} older than you`)
// }else{ 
// alert(`we are same age`)
// }


 let a = 4
  let b = 3

  let output= a >b ? "a is bigger tha b" : "b is greater"

  
  let result= b >a ? "a is bigger tha b" : "b is greater"
  console.log(result);
  
  let c= 10
  let d= 50
  if (d>c) {
    console.log("d is greated that c");
    
    
  } else {
    console.log("c is less than d");
    
    
  }

//   let hot ="it is raining and i can't come over";
//   let cold="i can wear jacket and cover myself";
//   let results=cold>hot ? "i will still come after the rain" : "i won't come if the weather is hot";
//   console.log(results);
  

//   let word= prompt ("Enter Number");
  
//   word1=word%2==0
  

// if (word1) {
//     alert(`the number is even`)
// }else{
//     alert(`it is an odd number`)

    

// let time=prompt("Enter time")
// let hour=new Date() .getHours()
// hour=Number(hour)
// time=Number(time)
// let results= time+hour
// if (results<18) {
//     alert(`good morning`)

    
// }else if (results<18) {
//     alert(`good afternoon`)
    
// }
// else{
//     alert(`good afternoon`)
// }   

// let grade=prompt("student grade");
// grade=Number(grade);
// if (grade >=80 &&  grade >=100) {
//     alert("Your score is A")
    
// }else if( grade>=70 && grade>89){
//     alert("Your score is B")
// }else if(grade >=60 && grade>=69){ 
//     alert("Your score is C")

// }else if(grade>=50 && grade>=59){ 
    
// }else if (grade >=40 && grade>=49) {
//     alert("Your grade is C")
    
// }else{ 
//     alert("Invalid inpute, please put a number from 1 and 100")
// }



// let month= prompt("Enter month")
// month=month.toLocaleLowerCase ()

// if (month==="september" || month==="october" || month==="november") {
//     alert("The season is Autumn")

// }else if (month==="december"|| month==="january "|| month==="february") {
//     alert(" The season is Winter")
    
// }else if (month==="march" || month==="april" || month==="may") {
//     alert("The season is Spring")
    
// } 
// else if (month==="june" || month==="july" || month==="august") {
//     alert("The season is Summer")
    
// }
// else{
//     alert("Invalid month. Please enter a valid month name")
// }   


  // let day=prompt("Enter day of the week");
  // day=day.toUpperCase();

  // if (day==="SATURDAY" || day==="SUNDAY") {
  //   alert(" It is a weekend")
  // }else if (
  //   day==="MONDAY" ||
  //   day==="TUESDAY" ||
  //   day==="WEDNESDAY" ||
  //   day==="THURSDAY" ||
  //   day==="FRIDAY"
  // ) {
  //   alert("It is a working day")
  // } else {
  //   alert("please enter a valid day of the week")
    
  // }

  // let month=prompt("Enter month")
  // month=month.toUpperCase()

  // if (
  //   month=== "JANUARY" ||
  //   month==="MARCH" ||
  //   month==="JULY" ||
  //   month==="AUGUST"||
  //   month==="OCTOBER"||
  //   month==="DECEMBER"
  // ) {
  //   alert("this month has 31 days")
  // }else if(
  //   month==="APRIL" ||
  //   month==="june" ||
  //   month==="SEPTEMBER" ||
  //   month==="NOVEMBER"
  // ){
  //   alert("This month has 30 days")
  // }else if (
  //   month==="FEBUARY"
  // ) {
  //   alert("febuary has 28 day")
    
  // } else {
  //   ("Enter a valid day of the month")
  // }


  


let month = prompt("Enter month").toLowerCase();
let year = prompt("Enter year");
year = Number(year);

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  alert("This month has 31 days");
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  alert("This month has 30 days");
} else if (month === "february") {
  if (isLeapYear(year)) {
    alert("February has 29 days because it's a leap year");
  } else {
    alert("February has 28 days");
  }
} else {
  alert("Please enter a valid month");
}
