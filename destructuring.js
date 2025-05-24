
const numbers = [1,2,3,4]

// const [one, two, three, four]=numbers

const [one, two, ...rest]=numbers

console.log(rest);



const student = {
    name:'Gloria',
    class:'Frontend',
    gender:'female',
    age:20
}


const {name}=student


try {
    console.log(name,age)
} catch (error) {


    // console.log(error)
    console.log('there is an error')
}

// console.log(restData);

const A = {name:'John'}
const B= {name:'Peter'}

const C = {...A, ...B}
console.log(C);
