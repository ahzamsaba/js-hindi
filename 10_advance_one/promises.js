// fetch('')
// const promiseOne = new Promise(function(resolve,reject){
//     // Do & async task
//     // DB calls, cryptography, network 
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()//connects to then
//     }, 1000);
// })



// promiseOne.then(function(){
//     console.log('Promise consumed');
// })
// Async task is complete
// Promise consumed



//promiseTwo
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log('Async 2 resolved');
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username : 'Chai',email : 'chai@example.com'})
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user);//{ username: 'Chai', email: 'chai@example.com' }
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // const error = false//{ username: 'ahzam', password: '123' }
//                               // ahzam

//         const error = true//ERROR : Something went wrong!
        
//         if(!error)
//             resolve({username:'ahzam',password:'123'})
//         else
//             reject('ERROR : Something went wrong!')
//     }, 1000);
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((uname) => {
//     console.log(uname);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(() => console.log('The promise is either resolved or rejected'))



// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error)
//             resolve({username:'javascript',password:'123'})
//         else
//             reject('ERROR : JS went wrong!')
//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()//ERROR : JS went wrong!



// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }
// getAllUsers()//Promise { <pending> }


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()//await needed here for json format conversion
//         console.log(data);
//     }catch(error){
//         console.log("E : ",error);
//     }
// }
// getAllUsers()//print whole respnse as an object from api



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
// prints whole object

// first it prints whole object then other async codes written earlier in file will be print at end of console
