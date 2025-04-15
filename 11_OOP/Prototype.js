// let myName = "ahzam     "

// console.log(myName.length);// 10


// console.log(myName.trueLength)


let myHero = ['Thor','Flash']
let heroPower = {
    thor : 'hammer',
    flash : 'speed',

    getFlashPower : function(){
        console.log(`Flas power is ${this.flash}`);
    }
}

Object.prototype.ahzam = function(){
    console.log('ahzam is present in all objects');
}

// heroPower.ahzam()//ahzam is present in all objects
// myHero.ahzam()//ahzam is present in all objects

Array.prototype.heyAhzam = function(){
    console.log("Ahzam says hello!!!");
}

// myHero.heyAhzam()//Ahzam says hello!!!
// heroPower.heyAhzam()//TypeError: heroPower.heyAhzam is not a function



// INHERITANCE
const User = {
    name : "chai",
    email : "chai@example.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TaSupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
// TeachingSupport gets properties of Teacher  -> same thing done as __proto__


let anotherUsername = "ChaiAurCode       "
String.prototype.trueLength = function(){
    console.log(`${this}`);//ChaiAurCode
    console.log(`True length is : ${this.trim().length}`);//True length is : 11
}
anotherUsername.trueLength()
"ahzam".trueLength()
"asghar     ".trueLength()