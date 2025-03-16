// singleton -> from constructor 
// Object.create


//Object -> keys & value
// Object Literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser = {
    name : "Ahzam",
    "full name" : "Ahzam Saba",
    age : 22,
    location : "Muzaffarpur",
    email : "ahzam@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Mon","Fri"],
    mySym1 : "myKey1",
    [mySym2] : "myKey2"
}


console.log(jsUser.email);//ahzam@gmail.com
console.log(jsUser['email']);//ahzam@gmail.com

console.log(jsUser["full name"]);//Ahzam Saba

console.log(typeof jsUser["mySym1"]);//string

console.log(typeof jsUser[mySym2]);//Syntax of using symbol

console.log(jsUser);
/*  {
    name: 'Ahzam',
    'full name': 'Ahzam Saba',
    age: 22,
    location: 'Muzaffarpur',
    email: 'ahzam@gmail.com',
    isLoggedIn: false,
    lastLoggedInDays: [ 'Mon', 'Fri' ],
    mySym1: 'myKey1',
    [Symbol(key2)]: 'myKey2'
    } */

jsUser.email = "asghar@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "abc@gmail.com"

// console.log(jsUser["email"]);//asghar@gmail.com

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(jsUser.greeting());
/*
Hello JS user
undefined */

console.log(jsUser.greetingTwo());//Hello JS user , Ahzam
