let userEmail = "ahzam@gmail.com"
if (userEmail) 
    console.log("Got user email");//Got user email
else
    console.log("email not found");

userEmail = ""
if (userEmail) 
    console.log("Got user email");
else
    console.log("email not found");//email not found

/*
falsy values =>

false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/*
truthy values =>

"0", 'false', " ", [], {}, function(){}
*/

userEmail = []
if(userEmail.length === 0)
    console.log("Array is empty");//Array is empty

const emptyObject = {}
if(Object.keys(emptyObject).length === 0)
    console.log("Object is empty");//Object is empty



// NUllish Coalesching Operator (??) : null or undefined

let val1;
val1 = 5 ?? 10
console.log(val1);//5

val1  = null ?? 10
console.log(val1);//10

val1 = undefined ?? 15
console.log(val1);//15

val1 = null ?? 10 ?? 20
console.log(val1);//10


// Ternary Operator
// condition ? true : false

const iceTea = 100
iceTea <=100 ? console.log("Affordable") : console.log("Not affordable");
//Affordable
