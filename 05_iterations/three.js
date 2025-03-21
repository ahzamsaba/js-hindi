// for of

// [{} , {} , {}]
const arr = [1,2,3]

for (const num of arr) {
    // console.log(num);
}
// 1
// 2
// 3

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is : ${greet}`);
}
// Each char is : H
// Each char is : e
// Each char is : l
// Each char is : l
// Each char is : o
// Each char is :  
// Each char is : W
// Each char is : o
// Each char is : r
// Each char is : l
// Each char is : d
// Each char is : !


// MAPS
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const [key,value] of map) {
    // console.log(key, ' :- ',value);
}
// IN  :-  India
// USA  :-  United States of America
// Fr  :-  France


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'GTA'
}

for (const [key,value] of myObject) {
    // console.log(key, ' :- ',value);
}
// TypeError: myObject is not iterable