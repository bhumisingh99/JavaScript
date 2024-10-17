// high order array loops

// for of loop
// [ "", "", "" ]
// [ {}, {}, {} ]

const arr = [ 3, 4, 6, 2, 1 ]
for (const i of arr) {
    console.log(`${i}`);
}
// o/p-
// 3
// 4
// 6
// 2
// 1
const greetings = [ "hii", "hello", "Radhey-Radhey", "Ram-Ram", "Namsate" ]
for (const greet of greetings) {
    console.log(`Each word is ${greet}`)
}
// o/p-
// Each word is hii
// Each word is hello
// Each word is Radhey-Radhey
// Each word is Ram-Ram
// Each word is Namsate
const greeting = "Ram-Ram"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}
// o/p-
// Each char is R
// Each char is a
// Each char is m
// Each char is -
// Each char is R
// Each char is a
// Each char is m

// Maps: contains only unique values and remains in order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
// o/p-
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }
map.set('IN', "INDIA")
console.log(map);
// o/p-
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   } : shows contain only unique values 
for (const key of map) {
    console.log(key);
}
// [ 'IN', 'INDIA' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

// destructuring of map
for (const [key] of map) {
    console.log(key);
}
// o/p-
// IN
// USA
// Fr

// destructuring of map
for (const [key, value] of map) {
    console.log(key, ':-', value)
}
// IN :- INDIA
// USA :- United States of America
// Fr :- France

// for object
const myObj = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}
// for (const [key, value] of myObj) {
//     console.log(key, value);
// }     // error, myObj is not iterable

// for of does not woeks for object