// code ko ek package mai band kar diya hai, aur uss package ko jahaan chaahe, kitni baar chaahe uski copies le jaa skte hai aur use kr skte hai

// declare
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName // : Function ka reference  // o/p - blank
const Name = sayMyName()  // execution   // o/p - H I T E S H
console.log(Name);        // undefined


// to add 2 nos : void type function, when called cannot be stored in any variable
// num1, num2 are parameters
function add2Nums(num1, num2) {
    console.log(num1 + num2);
}
// 5, "9", "a", null are arguments
// function is called
add2Nums(5, "9")  // 59
add2Nums(5, null) // 5
add2Nums(5, "a")  // 5a
add2Nums()        // NaN
const result = add2Nums(6, 3)
console.log(`Result : ${result}`);  // Result : undefined

// a function with return type, when called can be stored in any variable
function addTwoNums(num1, num2) {
    let result = num1+num2
    console.log("Hitesh");   // hitesh
    return result
    console.log("Hitesh");   // does not prints anything, after returning something, nothing can be printed.
}
const resul = addTwoNums(6, 3)     // by returning, we are assiging the value 
console.log(`Result : ${resul}`);  // Result : 9
// ways to return
function addTwoNumss(num1, num2) {
    return num1+num2
}
const resultt = addTwoNumss(7, 6)
console.log(resultt);              // 13
// or
console.log(addTwoNumss(7, 2));    // 9
 
// ways to take args, Sam is default value
function logInUserMsg(userName = "Sam") {
    if(!userName) {    // or (username === undefined)
        console.log("Please enter a Username");
        return
    }
    return `${userName}, just Logged In`
}
console.log(logInUserMsg());         // undefined, just logged In
console.log(logInUserMsg("Bhumi"));  // Bhumi, just logged In

// in shopping cart, we do not have any idea how may items are going to be added in the cart, we use " rest operator "
function calculateCartPrice(...num1) {   //rest operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500));  // 200, without using rest operator
console.log(calculateCartPrice(200, 400, 500));  // [ 200, 400, 500] after using rest operator(...in parameters)

function calculateItems( val1, val2, ...num) {
    return num
}
console.log(calculateItems(400, 600, 300, 2000, 100));   // [ 300, 2000, 100 ], as 400:val1, 600:val2 and we are returning only num

// how this object is passed in the function and used 
const user = {
    userName: "Bhumi",
    price: 199
}
function handleObject(anyobject) {
    console.log( `UserName is ${anyobject.userName} and price is ${anyobject.price}` );
}
handleObject(user)   // UserName is Bhumi and price is 199

// arrays can also be paseed
const myNArr = [ 4, 7, 2, 6 ]
function returnSecValue(getArray) {
    return getArray[1]
}
console.log(returnSecValue(myNArr));   // 7