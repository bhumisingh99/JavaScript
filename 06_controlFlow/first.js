// control flow or logic control

// the code must run with conditional logics always 
// operators : <, >, <=, >=, ==, !=, ===, !==

// if-else
let temp = 50
if( temp<=50 ) {
    console.log(`Temp is : ${temp}, which is equal or less than 50`);
}
else {
    console.log(`Temp is : ${temp}, which is more than 50`);
}

let score = 200
if( score>100 ) {
    let power = 1000
    console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`) : error occurs due to scope

// shorthand notation
const balance = 1000
// implicit scope
if( balance>500 ) console.log("test");
// or
if( balance>500 ) console.log("test"), console.log("test2") // this is not preferred to be done

// if-else-if
if( balance<500 ) {
    console.log("less than 500");
}
else if( balance==500 ) {
    console.log("equal to 500");
}
else{
    console.log("more than 500");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if( userLoggedIn && debitCard) {
    console.log("Allowed to purchase any course");
}
if( loggedInFromEmail || loggedInFromGoogle ) {
    console.log("User Logged In");   
}