// DATES

let myDate = new Date()
// console.log(myDate);//2025-03-15T10:21:10.315Z

// console.log(myDate.toString());//Sat Mar 15 2025 10:21:10 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());//Sat Mar 15 2025
// console.log(myDate.toISOString());//2025-03-15T10:22:48.632Z

// console.log(myDate.toJSON());//2025-03-15T10:23:21.236Z

// console.log(myDate.toLocaleDateString());// 3/15/2025

// console.log(myDate.toLocaleString());// 3/15/2025, 10:24:58 AM

// console.log(myDate.toLocaleTimeString());//10:24:58 AM

// console.log(typeof myDate);//object


let myCreatedDate = new Date(2025,0,23)
// console.log(myCreatedDate.toDateString());//Thu Jan 23 2025

myCreatedDate = new Date(2025,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());// 1/23/2025, 5:03:00 AM

myCreatedDate = new Date("2025-01-10")//yyyy-mm-dd
// console.log(myCreatedDate.toDateString());//Fri Jan 10 2025

myCreatedDate = new Date("01-10-2025")//mm-dd-yyyy
// console.log(myCreatedDate.toDateString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1742034755295

// console.log(myCreatedDate.getTime());//1736467200000

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());//15
// console.log(newDate.getMonth() + 1);//3
// console.log(newDate.getFullYear());//2025
// console.log(newDate.getDay());//6     ->Saturday


newDate.toLocaleString('default',{
    weekday: "long"
})