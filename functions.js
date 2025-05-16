// function ShowMyName (){
//     console.log('My Name is Gloria')
// }




// function ShowMyName (name){
// let welcomeText = `Welcome to class ${name}`

// console.log(welcomeText)
// }
// ShowMyName()
//  ShowMyName('Peter')




 function AddTwoNum (a,b){
    let result = a+b;
    // console.log('result is :', result)


//  return  result;
 }
//    console.log( AddTwoNum(3,15))



//   function multiplyNum (a,b,c){
// result = a*b *c

// console.log(result);

//   }

//   multiplyNum(2,3,4)








// function Calculator (a,b, todo){

// let result 
//     if (todo=='add'){
// result =AddTwoNum(a,b)
//     }
//     else if (todo =='substract')
//     {
//         result = a-b
//     }else if (todo=='divide' ){
//         result =a/b

//     }
//     else if (todo == 'multiply'){
//       result=  a*b
//     }


//     else {
//     result='invalid function'
//     }
// return result
// }



// console.log(Calculator(4,5, 'add'))









// //     function AddMultNum (a,b,c){
// // result = AddTwoNum(a,b) *c

// // console.log(result);

// //   }



// //   AddMultNum(2,3,4)







// const AddTwoNums =(a,b)=>{
// result = a+b

// return result
// }


// function sayHello(name) {
//   console.log('Hello, ' + name + '!');
// }
// sayHello('Gloria')


// function mulp(c,b,h) {
// return c+b-h
// }

//     let result=mulp(4,10,7)
// console.log(result);


// function text(name) {
//    console.log(`'welcome and have your seat at the center of the hall' ${name}`);
    
// }
// text('Blessing')



// function myname(name) {
    
// }console.log('my name is Gloria');
// myname('name')


// function fullName(firstName, lastName) {
  
    
// }  console.log('Gloria Malik');


// function fullName(firstName,lastName) {
//     return firstName +' '+lastName
// }

// function Addnumbers(num1, num2) {
//     return num1+num2
// }
// let result =Addnumbers(10,15)
// console.log(result);


// function  areaOfRectangle(h,b) {
//     return h*b
    
// }let results=areaOfRectangle(4,14)
// console.log(results);


// function perimeterOfRectangle(len, breath) {
//     return 2*(len+breath)
// }total=perimeterOfRectangle (3,4)
// console.log(total);


// function volumeOfRectPrism(length,height,width) {
//     return length*width*height
// }sum=volumeOfRectPrism(3,45,6)
// console.log(sum);


// function areaOfCircle( π , r , r) {
//     return  Math.PI*r*r
// }all=areaOfCircle(3,4,5)
// console.log(all);

// function circumOfCircle(r) {
//     return 2*Math.PI *r
// }run=circumOfCircle(12)
// console.log(run);


// function  density(a, b) {
//     return a/b
// }sum=density(8,9)
// console.log(sum);


// function speed(distance, time) {
//     return distance/time
// }sums=speed(3,5)
// console.log(sums);


// function gravity(u,i) {
//     return u*i
// }total=gravity(4,6)
// console.log(total);
// function convertCelsiusToFahrenheit(Celsius) {
//      return (Celsius * 9/5) + 32
// }tempInFahrenheit =convertCelsiusToFahrenheit(34)
// console.log(tempInFahrenheit);


// function calculateBMI(w,h) {
//      const BMI= w/(h*h)
// }let category
// if (BMI<18.5 ) {
//    category='underweight'  
// }else if (BMI >=18.5 && BMI <=24.9) {
//      category='weight is normal'
// } else if (BMI>=25 && BMI<=29.9) {
//      category="overweight     "
// } else {
//      category='obessed'
// } 
     

 function checkmonth(month) {
     month=month.toLowerCase()
 
 if (month==="september" || month==="october" || month==="november") {
      return "Autumn";
 }else if (month==="december" || month==="january" || month==="february") {
      return "winter"
 } else if (month==="march" || month==="april" || month==="may") {
     return "sprimg"
 } else if (month==="june" || month==="july" || month==="august"){ 
     return "summer"
 }else{ 
      return "invalid month"
}
}
     
console.log(checkmonth("april"));



