// console.log(Math.PI);// 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);// 3.141592653589793



const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
/*
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}*/


// const myNewObj =  Object.create(null)

const chai = {
    name : 'Ginger Chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("code phat gaya")
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
    value: 'Ginger Chai',
    writable: true,
    enumerable: true,
    configurable: true
}*/
// Object.defineProperty(chai,'name',{
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
    value: 'Ginger Chai',
    writable: false,
    enumerable: false,
    configurable: true
}*/

// for (let [key,value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }
/*
price : 250
isAvailable : true*/
// since enumeration is false 'name' is not here



// Object.defineProperty(Math,'PI',{
//     configurable : true,
//     writable : true
// })
// Math.PI = 5
// console.log(Math.PI);
// // TypeError: Cannot redefine property: PI


// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
Object.defineProperty(chai,'name',{
    configurable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // configurable : true
    writable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));
