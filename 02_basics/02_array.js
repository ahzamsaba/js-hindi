const marvel_heroes = ["Thor","Iron-Man","Spider-Man"]
const dc_heroes = ["Super-Man","Flash","Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
/*[
  'Thor',
  'Iron-Man',
  'Spider-Man',
  [ 'Super-Man', 'Flash', 'Batman' ]
] */
// console.log(marvel_heroes.length);//4


const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);//[ 'Thor', 'Iron-Man', 'Spider-Man', 'Super-Man', 'Flash', 'Batman' ]

const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);//[ 'Thor', 'Iron-Man', 'Spider-Man', 'Super-Man', 'Flash', 'Batman' ]


const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let usable_anotherArr = anotherArr.flat(2)
// console.log(usable_anotherArr);
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */


console.log(Array.isArray("Ahzam"))//false

console.log(Array.from("Ahzam"))//[ 'A', 'h', 'z', 'a', 'm' ]

console.log(Array.from({name : "Ahzam"}))//[]


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) ;//[ 100, 200, 300 ]
