// JsEC: JavaScript Execution Context
// In code files: first formation is of global Ex.Context and is refered to 'this'
// for browser, node, deno : global Ex. context is different for each, 
// for browser, the value for this, we get is: "window object" 
// Js is single threaded: a lang which can execute only one task at a time. The program will execute the tasks in sequence, and each task must complete before the next task starts.

// global execution context 
// function/functional execution context
// eval execution context : is a property of a global object: mainly comes in use for mongooes

// how js code is executed
// code runs in two phases: 1st: memory creation phase/creation phase, 2nd:  execution phase
// 1st phase mai sirf memory allocation hoti hai

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2) 
let result2 = addNum(10, 2)

// global execution/ global environment, yeh allocate hota hai this k andarr
// memory phase: saare variables are gathered and stored, ex: val1 = undefined, val2 = undefined, addNum = definition, result1 = undefined, result2 = undefined 
// execution phase: val1 = 10, val2 = 5, addNum creates another executional context, in which [new variable envi + execution thread] is created, ab iska memory phase aur execution phase define hoga  , result1 = val1+val2, result2 = 

// call stack
function one(){
    console.log("One");
}
function two(){
    console.log("Two");
}
function three(){
    console.log("Three");
}
one()
two()
three()