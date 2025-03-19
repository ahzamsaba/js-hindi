var c= 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);// ReferenceError: a is not defined
// console.log(b);// ReferenceError: b is not defined
// console.log(c);// 30 -> it shoul be 300(its a major     
//                      problem with var)



// Global Scope & Block Scope

let a = 300    // GLOBAL SCOPE

if(true){      // BLOCK SCOPE    
    let a = 10
    // console.log(a);// 10
}
// console.log(a);// 300




/**********************SCOPES-2**********************/

function one(){
    const username = "Ahzam"

    function two(){
        const website = "YT"
        // console.log(username)// Ahzam
    }
    // console.log(website)// ReferenceError: website is not defined

    two()
}

one()

if(true){
    const username = "Ahzam"
    
    if(username == "Ahzam"){
        const  website = " YT"
        // console.log(username + website)//Ahzam YT
    }

    // console.log(website);// ReferenceError: website is not defined
}

// console.log(username)// ReferenceError: username is not defined



// +++++++++++++++++++interesting+++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}

// console.log(addOne(5))// 6


addTwo(5)// ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

addTwo(5)