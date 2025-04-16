// ES6 ke baad ka hai sab javascript ham karrhe hai

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("ahzam","chai@gmail.com",123)

console.log(chai.encryptPassword());// 123abc

console.log(chai.changeUsername());// AHZAM



// behind the scene

function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password   
}
User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea","tea@example.com",999)
console.log(tea.encryptPassword());// 999abc
console.log(tea.changeUsername());// TEA

