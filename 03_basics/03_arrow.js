const user = {
    username : "ahzamsaba",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website!`);
        console.log(this);
        
    }
}


// user.welcomeMessage()
// ahzamsaba , welcome to website!
// {
//   username: 'ahzamsaba',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// } 

// user.username = "asghar"

// user.welcomeMessage()
// asghar , welcome to website!
// {
//   username: 'asghar',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


// console.log(this);// {}       in browser=>window object

function chai(){
    let username = "ahzam"
    console.log(this.username);
}
// chai() // undefined

const chaii = function(){
    let username = "ahzam"
    console.log(this.username);
}
// chaii() // undefined

const chaiii = () => {
    let username = "ahzam"
    console.log(this.username);
}
// chaiii()// undefined


// ARROW FUNCTION

const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,5));// 8

const addTwoo = (num1,num2) => num1+num2
console.log(addTwoo(3,5));// 8

const addTwooo = (num1,num2) => (num1+num2)
console.log(addTwooo(3,5));// 8


const returnObject = () => ({username : "ahzam"})
console.log(returnObject());// { username: 'ahzam' }