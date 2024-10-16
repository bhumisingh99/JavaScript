// for object, { } is object declaration
// function , if-else : { } is scope

// global scope
// var c = 300
let a = 300 

// block scope
if(true) {
    let a = 10;
    const b = 20; 
    var c = 30;
    console.log(a);  // 10
}

// console.log(a);       // 300 : not defined 
// console.log(b);    //  : not defined
// console.log(c);       // 30


// global scope when run inside inspect and node works differently

// function inside function
function one() {
    const username = "anshika"

    function two() {
        const website = "GitHub"
        console.log(username);    // anshika
    }
    // console.log(website)       // cannot be done, due to scope limit, not defined : error
    two()
}
one()
// function call krte hai uske liye alag ek stack banta hai.


if(true) {
    const username = "anshika"
    if( username === "anshika" ) {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);   // not defined: error
}
// console.log(username);      // not defined: error, due to scope


// ++++++   interesting   ++++++++++++

console.log(addOne(6) );    // 7
function addOne(num) {
    return num+1
}

// its a function as well but known as expression
// mini hoisting, not only function is declared, but also stored in a variable
// console.log(addTwo(3));  // error: execution context 
const addTwo = function(num) {
    return num+2
}