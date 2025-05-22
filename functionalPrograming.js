const arr1 = [1,2,3,4,5,6,7,8]



let sum =0

//forEach
// arr1.forEach((num,i)=>

//     {
// sum+=num
// console.log(sum)
//     }


// )



//  console.log(sum)


//map
  arr1.map((num)=> 

{
  console.log(num);
    
})




    const arr2 =  arr1.map((num)=>num +4)
    console.log(arr2);
    

const arr3 = arr2.map((num)=>(
    num*num
))

console.log(arr3);



//filter




const countries =['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']







const countriesHasMany = countries.filter((cou)=>


    cou.toLowerCase().includes('many')
)

console.log(countriesHasMany);



const students = [{id:21, firstName:'Gloria', city:'Kano', age:23,isMarried:true},{id:22, firstName:'Gloria', city:'Kaduna', age:20,isMarried:false},{id:23,firstName:'John', city:'Lokoja', age:22,isMarried:true} ]





function getStudentbyId (studentId) {

    student = students.filter((stu)=> stu.id==studentId)
return student[0]
}




console.log(getStudentbyId(22))




//reduce


 const total = students.reduce((acc, cur)=>
    acc+cur.age,0
)

console.log(total);


const arr4 = [2,4,6,8,]

let areEven = arr4.some((num)=>

    num%2==0
)

console.log(areEven)