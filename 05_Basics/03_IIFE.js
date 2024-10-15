// IIFE: Immediately Invoked Function Expressions

// function immediately execute ho jaaye
// why? : db, global scope's var, fun k andar global scope pollute kre
// to remove the pollution from the global scope
// 1st (): for definition, 2nd (): for execution in IIFE

(function one() {
    // named IIFE
    console.log(`Db connected`);
}) ();  // here semicolon is must, or else error will occur
// or
// function greeting(name) {
//     console.log(`hii there ${name}`);   
// }
// greeting("anshika");


((name) => {
    // normal IIFE
    console.log(`Db connected two ${name}`);
}) ('hitesh');
// or
// console.log(greet("hitesh")) : cannot be accessed
// const greet = (name) => {
//     console.log(`hello there ${name}`)
// }
// greet("hitesh");