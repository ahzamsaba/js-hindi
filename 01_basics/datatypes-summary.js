//1. Primitive
/*
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

// JavaScript is dynamically typed, meaning that variables do not have a fixed type.(unlike C++ or Java)
    let x = 5;      // x is a number
    x = "hello";    // now x is a string

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);//false

const bigNumber = 6516848941651564684n




// 2. Reference (Non primitive)
/*
Array, Objects, Functions
*/
const heroes = ["Ironman","Thor","Flash"];

let myObj = {
    name : "Ahzam",
    age : 22,
}

const myFunction = function(){
    console.log("Helloooo!!!!!");
}

// console.log(typeof myFunction);//function






// *************************************************

// Stack(Primitive) & Heap(Reference)
//      copy             original

// 1.Stack -> Primitive datatypes
let myName = "Ahzam Saba"
let anotherName = myName//copy of myName
anotherName = "Asghar"//copy changed only

// console.log(myName);//Ahzam Saba
// console.log(anotherName);//Asghar


// 2.Heap -> Non-primitive datatypes
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne//reference
userTwo.email = "ahzam@google.com"//original changed

// console.log(userOne.email);//ahzam@google.com
// console.log(userTwo.email);//ahzam@google.com
