const score = 400
// console.log(score);//400

const balance = new Number(100)
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//100.00

let num = 23.9176
// console.log(num.toPrecision(3));//23.9
num = 123.9176
// console.log(num.toPrecision(3));//124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000







//**********************MATHS**********************

// console.log(Math);//Object [Math] {}

// console.log(Math.abs(-4));//4
// console.log(Math.round(4.5));//5
// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.9));//4

// console.log(Math.pow(2,3));//8

// console.log(Math.min(4,8,3,5));//3
// console.log(Math.max(4,8,3,5));//8

// console.log(Math.random());//between 0 and 1
// console.log((Math.random()*10) + 1);//bw 1.000 & 10.0000
// console.log(Math.floor(Math.random()*10) + 1);//bw 1 & 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );//10 to 20
