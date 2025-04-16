function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    // setUserName(username)//not called only referecnce 
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai",'chai@example.com',1234)
console.log(chai);
// createUser { email: 'chai@example.com', password: 1234 }


// after using call function and passing this as reference to setUserName
/*
called
createUser {
  username: 'chai',
  email: 'chai@example.com',
  password: 1234
}
*/