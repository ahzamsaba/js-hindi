const User = {
    _email : 'asghar@example.com',
    _password : 'abccc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email);
