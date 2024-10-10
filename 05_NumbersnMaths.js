// /**********  NUMBER  ****************************************************************************************/

// const score = 400
// console.log(score);    // 400

// // specifically cast/said to declare BALANCE a NUMBER, in an object and passed the value in constructor
// const balance = new Number(100)
// console.log(typeof balance);        // object
// console.log(balance);               // [Number: 100]

// //methods- prototypes
// console.log(balance.toFixed(1))          // 1 - 100.0, 2 - 100.00, 3 - 100.000 
// console.log(balance.toString().length)   // 3

// const otherNum = 23.8966
// console.log(typeof otherNum);            // number
// console.log(otherNum.toPrecision(3));    // 23.9

// const hundreds = 1000000         
// console.log(hundreds.toLocaleString())          // in usd - 1,000,000
// console.log(hundreds.toLocaleString('en-IN'))   // for Indians - 10,00,000

// // console.log(Number.MAX_VALUE) -  research more!!



// /*********  MATHS  ****************************************************************************************/

// console.log(Math);                 // Object [Math] {}
// console.log(Math.abs(4));          // 4
// console.log(Math.abs(-4));         // 4

// console.log(Math.round(4.3));      // 4
// console.log(Math.round(4.5));      // 5
// console.log(Math.round(4.9));      // 5

// console.log(Math.ceil(4.2));       // 5
// console.log(Math.ceil(4.5));       // 5
// console.log(Math.ceil(4.6));       // 5

// console.log(Math.floor(4.2));      // 4
// console.log(Math.floor(4.5));      // 4 
// console.log(Math.floor(4.9));      // 4

// console.log(Math.min(4, 3, 9, 6, 1, 3, 0));      // 0
// console.log(Math.max(4, 3, 9, 6, 1, 3, 0));      // 9

// //research in console-inspect and mdn

// random returns the decimal value
console.log(Math.random()*1);     //means value less then 1 
console.log(Math.random()*10);    //means value less then 10
console.log(Math.random()*100);   //means value less then 100
console.log(Math.random()*200);   //means value less then 200

//floor returns the int value
console.log(Math.floor(Math.random()*1));     //means value less then 1
console.log(Math.floor(Math.random()*10));   //means value less then 10
console.log(Math.floor(Math.random()*500));    //means value less then 500
console.log(Math.floor(Math.random()*1000));    //means value less then 1000
