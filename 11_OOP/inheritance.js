class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//takes "this" as parameter by default and executes User's constructor
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);   
    }
}

const chai = new Teacher("chai",'chai@teacher.com',123)
// chai.addCourse()// A new course was added by chai

const masalaChai = new User("Masala Chai")
masalaChai.logMe()// Username is Masala Chai
chai.logMe()// Username is chai

console.log(chai === masalaChai);// false
console.log(chai === Teacher);// false
console.log(chai instanceof Teacher);// true
console.log(chai instanceof User);// true


