// for in

const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} -> ${myObj[key]}`);
}
// js -> javascript
// cpp -> C++
// rb -> Ruby
// swift -> swift by apple


const myArr = ['js','cpp','python','java']
for (const key in myArr) {
    // console.log(myArr[key]);
}
// js
// cpp
// python
// java


// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
// }