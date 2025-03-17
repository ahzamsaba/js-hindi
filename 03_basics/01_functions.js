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

console.log(loginUserMessage2());//asghar just logged in
