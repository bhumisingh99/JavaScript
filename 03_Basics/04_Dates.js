// Date object represents single moment in time in a platform independent format.
// January 1, 1970 in milliseconds
// proposal : temporal, an global object that brings date/time api to the ECMAScript lang.

// Dates

let myDate = new Date();      // Date Object
console.log(typeof myDate);   //object

console.log(myDate);          // 2024-10-12T17:17:35.286Z

 console.log(myDate.toString());          // Sat Oct 12 2024 17:17:35 GMT+0000 (Coordinated Universal Time) 
 console.log(myDate.toLocaleString());    // 10/12/2024, 5:17:35 PM

console.log(myDate.toISOString());     // 2024-10-12T17:17:35.286Z
console.log(myDate.toJSON());          // 2024-10-12T17:17:35.286Z

console.log(myDate.toTimeString());         // 17:17:35 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleTimeString());   // 5:17:35 PM

 console.log(myDate.toDateString());        // Sat Oct 12 2024
console.log(myDate.toLocaleDateString());   // 10/12/2024

console.log(myDate.getTimezoneOffset());    // 0

let myCreatedDate = new Date(2024, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());     // 1/23/2024, 5:03:00 AM
myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());       // Tue Jan 23 2024

myCreatedDate = new Date("2024-10-12")
console.log(myCreatedDate.toLocaleString());     // 10/12/2024, 12:00:00 AM

myCreatedDate = new Date("12-10-2024")
console.log(myCreatedDate.toLocaleString());     // 12/10/2024, 12:00:00 AM


//for quizez, poll, fastest time, timer
let myTimeStamp = Date.now()
console.log(myTimeStamp);                // 1728754202846 : in milliseconds
console.log(myCreatedDate.getTime());    // 1733788800000

console.log();
