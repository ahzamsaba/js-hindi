const tinderUserr = new Object()//singleton bject
// console.log(tinderUserr);// {}

const tinderUser = {}//non-singleton object
// console.log(tinderUser);// {}

tinderUser.id = "123abc"
tinderUser.name = "Yuviiii"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '123abc', name: 'Yuviiii', isLoggedIn: false }

const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        user_fullName : {
            firstName : "Ahzam",
            lastName : "Saba"
        }
    }
}

// console.log(regularUser.fullName);//{ user_fullName: { firstName: 'Ahzam', lastName: 'Saba' } }

// console.log(regularUser.fullName.user_fullName);//{ firstName: 'Ahzam', lastName: 'Saba' }

// console.log(regularUser.fullName.user_fullName.firstName);//Ahzam


const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'a', 4 : 'b'}

const obj3 = {obj1 , obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1 , obj2)
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1,...obj2}
// console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id : 1,
        email : "ahzam@gmail.com"
    },
    {
        num : 123445 
    }
]


console.log(tinderUser);//{ id: '123abc', name: 'Yuviiii', isLoggedIn: false }

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));//[ '123abc', 'Yuviiii', false ]

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Yuviiii' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
