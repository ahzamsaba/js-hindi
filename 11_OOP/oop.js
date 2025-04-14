const user = {
    username : "ahzam",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user details");//Got user details
        console.log(this);
        // {
        //     username: 'ahzam',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        // }
    }
}
// console.log(user.username);//ahzam
// user.getUserDetails()

// console.log(this);//{}
//in browser it gives window object



// const promiseOne = new Promise()
// const date = new Date()
// // new -> constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this// this is returned by default if not returned also
}
const user1 = User('ahzam',12,true)
const user2 = User('asghar',21,false)

// console.log(user1); // username: 'asghar',
                    // loginCount: 21,
                    // isLoggedIn: false
// user2 overwrites the user 1 values
// to avoid it we use "new" keyword

const user3 = new User('ahzam',12,true)
const user4 = new User('asghar',21,false)
// console.log(user3);//User { username: 'ahzam', loginCount: 12, isLoggedIn: true }


console.log(user3.constructor);//[Function: User]
