// primitive  :  String, Number(int), BigInt, Boolean, null, undefined, Symbol
//number
const num = 9;                
const numDec = 9.7;        
//null   
const outsideTemp = null;     
//boolean
const isLoggedIn = false;     
//undefined
let userEmail;                
//symbol
const id = Symbol('123')            
const anotherId = Symbol('123')
console.log(id == anotherId)        //false : inspite of same values it gives false, this is the work of symbol
console.log(typeof id);             //symbol

const bigNumber = 987654397654n     //bigint use n in the end, automatically it will keep value in range 
console.log(typeof bigNumber)       //bigint, and if we del bignumber then run then undefined

// reference Type( Non-primitive)  :  Array, Object, Function
//array
const heros = ["ShaktiMan", "Naagraj", "Doga"];
console.log(typeof heros)         //object
//object
let myObj = {
    name  : "Bhumi",
    age : 22
}
//function
const myFunction = function() {   
    console.log("Hello World")
}
console.log(typeof myFunction);   //function, but actually it is object function

// typeof : in notes

// Dynamically Typed Lang.