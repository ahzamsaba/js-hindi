class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password.toUpperCase()}ahzam`
    }
    set password(val){
        this._password = val.toLowerCase()
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
}

const ahzam = new User('ahzam@example.com',"123abc")
console.log(ahzam.password);// 123ABCahzam
console.log(ahzam.email);// AHZAM@EXAMPLE.COM
