class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return `${this.username[0]}123${this.username[this.username.length-1]}`
    }
}
const ahzam = new User("ahzam")
// console.log(ahzam.createId())// ahzam.createId is not a function

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const hitesh = new Teacher('Hitesh','hitesh@teacher.com')
hitesh.logMe();// Username is Hitesh
console.log(hitesh.createId());// hitesh.createId is not a function

