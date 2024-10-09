"use Strict" //treat all js code as newer version in this file

// using nodejs, not browser
// alert("hello")  //o/p : error(here in node)  //hello(in browser)
// or 
// alert(3+3)      //o/p : error(here in node)  //6(in browser)

//code readability must be high
console.log(3+
    3)
console.log("hello")

let name = "Bhumi";
let age = 34;
let isLoggedIn = false;

//primitive datatype
// Number : 2^53
// BigInt
// String : "" or ''
// Boolean : true/false
// null : standalone value : empty
// undefined : value not assigned
// Symbol : to find uniqueness, mostly used in figma,etc

//object
console.log(typeof age)       //o/p : number 
console.log(typeof undefined) //o/p : undefined 
console.log(typeof null)      //o/p : object 