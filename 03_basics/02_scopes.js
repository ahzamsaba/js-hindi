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
    console.log(a);// 10
}
console.log(a);// 300
