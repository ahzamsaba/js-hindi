function sayMyName(){
    console.log("A");
    console.log("H");
    console.log("Z");
    console.log("A");
    console.log("M");
}

// sayMyName()
/*
A
H
Z
A
M */


function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers()//NaN
// addTwoNumbers(2,3)//5
// addTwoNumbers(3,"4")//34 -> both treated as string
// addTwoNumbers(3,"a")//3a
// addTwoNumbers(3,null)//3


function addTwoNum(num1,num2){
    return num1 + num2
}
// console.log("Result :",addTwoNum(5,5));// Result : 10


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ahzam"))// Ahzam just logged in

// console.log(loginUserMessage())//undefined just logged in


function loginUserMessage1(username){
    if(username === undefined){ //if(!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage1());//Please enter username


function loginUserMessage2(username = "asghar"){
    return `${username} just logged in`
}

// console.log(loginUserMessage2());//asghar just logged in





/**********************FUNCTION-2**********************/


// ... -> rest and spread both according to condition
function calculateCartPrice(...num1){//rest
    return num1;
}

// console.log(calculateCartPrice(100,200,300));//[ 100, 200, 300 ]


function calculateCartPrice1(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice1(100,200,300,2000));//[ 300, 2000 ]



const user = {
    username : "Ahzam",
    price : 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)//Username is Ahzam and price is 99

/*
handleObject({
    username : "Asghar",
    price : 500
})// Username is Asghar and price is 500 */


const myNewArr = [200,300,400,500]

function getSecondValue(getArr){
    return getArr[1]
}

// console.log(getSecondValue(myNewArr));// 300

console.log(getSecondValue([1000,5000,10000]));// 5000
