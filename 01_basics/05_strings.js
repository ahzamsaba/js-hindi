//To get String Functions -> Write it in console
// const gameName = new String('AhzamConsole')
// gameName

const name = "Ahzam"
const repoCount = 10

// console.log(name + repoCount + " Value");//outdated

// console.log(`Hello I am ${name} and my repo count is ${repoCount}.`);//String interpolation

const gameName = new String('Ahzam-Console')

// console.log(gameName[0]);//A
// console.log(gameName.__proto__);//{}

// console.log(gameName.length);//13
// console.log(gameName.toUpperCase());//AHZAM-CONSOLE

// console.log(gameName.charAt(4));//m
// console.log(gameName.indexOf('m'));//4

const newStr = gameName.substring(0,4)
// console.log(newStr);//Ahza

const anotherStr = gameName.slice(-13,4)//Ahza
// console.log(anotherStr);

const newSrtrOne = "    ahzam    "
// console.log(newSrtrOne);//    ahzam    
// console.log(newSrtrOne.trim());//ahzam

const url = "https://ahzam.com/ahzam%20saba"
// console.log(url.replace('%20', '-'))//https://ahzam.com/ahzam-saba
// console.log(url.includes('ahzam'))//true

const gameN = new String('Ahzam-Console-New')
console.log(gameN.split('-'));//[ 'Ahzam', 'Console', 'New' ]
