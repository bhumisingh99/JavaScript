// Array is an object: can have different types of data, resizable, can contain arrays.
// Arrays are not associative arrays: cannot be accessed using arbitary strings, i.e.
// console.log(myArr["one"]) : shouln't be done,
// console.log(myArr[0]) : shoul be done.  
// 0 based indexing, array use numbered indexes
const Arra = [0, 1, 2, 3, 4, 5, true, "hitesh"]  // array literal
// when copy operation is performed in array, then shallow copies are created :
// Shallow copy of an obj is a copy whose properties share the same reference point,
// Deep copy of an obj is a copy whose properties do not share the same reference point


// ways to declare an array
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

const myHeros = ["Shaktiman", "Naagraj"];
//or
const cars1 = new Array("Saab", "Volvo", "BMW") // not recommended to use for simplicity, readability and execution speed

// properties
const myArr = [9, 1, 3, 5]
console.log(myArr[0]);           // 9
console.log(myArr.length);       // 4 : the length of an array

// methods 

// to add value/values at the end
myArr.push(6, 12)         
myArr.push(8)         
console.log(myArr);      // [ 9, 1, 3, 5, 6, 12, 8 ]
// to del a value from the end
myArr.pop()       
myArr.pop()           
console.log(myArr);      // [ 9, 1, 3, 5, 6 ]
// adds a value/values in the beginning, due to which all the values have to shift 1 place backwards, due to which it is a time consuming process, as well creats load on comp
myArr.unshift(0, 2)       
console.log(myArr);      // [ 0, 2, 9, 1, 3, 5, 6 ]
// removes the value that is added by unshift
myArr.shift( )         
console.log(myArr);      // [ 2, 9, 1, 3, 5, 6 ]
// to check if exists 
console.log(myArr.includes(7))  // false
// to determine at what position/index does 7 exists 
console.log(myArr.indexOf(7))   // -1, as 7 does not exists

//splice() and slice() : to sub-divide an array
console.log("A ",myArr);   // A [ 2, 9, 1, 3, 5, 6 ]

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);   // B [ 2, 9, 1, 3, 5, 6 ]

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C ",myArr);   // C [ 2, 5, 6 ]

const newArr = myArr.join(" | ")
console.log(newArr);            // 2|5|6
console.log(typeof newArr);     // string

const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// combines 2 or more arrays
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);          // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

// spread : glass bowl 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);     // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

marvel_heros.push(dc_heros)
console.log(marvel_heros);          // [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
console.log(marvel_heros[3]);       // [ 'SuperMan', 'Flash', 'BatMan' ]
console.log(marvel_heros[3][1]);    // Flash

const another_array = [ 1, 2, 3, [ 4, 5, 6 ], 7, [6, 7, [ 4, 5 ] ] ]
console.log(another_array.flat(1));          // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
console.log(another_array.flat(2));          // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
console.log(another_array.flat(Infinity));   // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Hitesh"))   // false
console.log(Array.from("Hitesh"))      // [ 'H', 'i', 't', 'e', 's', 'h' ]

// interesting: confused 
console.log(Array.from({    
    name : "Hitesh"     
}))                                    // []

let s1 = 100
let s2 = 200
let s3 = 400
console.log(Array.of(s1, s2, s3));  // [ 100, 200, 400 ]