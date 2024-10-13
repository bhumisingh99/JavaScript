// Date object represents single moment in time in a platform independent format.
// January 1, 1970 in milliseconds
// proposal : temporal, an global object that brings date/time api to the ECMAScript lang.

// Dates

let myDate = new Date();      // Date Object
console.log(typeof myDate);   //object

console.log(myDate);          // 2024-10-13T15:31:12.878Z

 console.log(myDate.toString());          // Sun Oct 13 2024 15:31:12 GMT+0000 (Coordinated Universal Time) 
 console.log(myDate.toLocaleString());    // 10/13/2024, 3:31:12 PM

console.log(myDate.toISOString());     // 2024-10-13T15:31:12.878Z
console.log(myDate.toJSON());          // 2024-10-13T15:31:12.878Z

console.log(myDate.toTimeString());         // 15:31:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleTimeString());   // 3:31:12 PM

 console.log(myDate.toDateString());        // Sun Oct 13 2024
console.log(myDate.toLocaleDateString());   // 10/13/2024

// custom
let myCreatedDate = new Date(2024, 0, 23, 21, 3, 31)
console.log(myCreatedDate.toString());           // Tue Jan 23 2024 21:03:31 GMT+000 (Coordinated Universal Time)
console.log(myCreatedDate.toLocaleString());     // 1/23/2024, 9:03:31 PM
console.log(myCreatedDate.getDay());             // 2: Tue
console.log(myCreatedDate.getMonth());           // 0: Jan

myCreatedDate = new Date("2024-10-31")
console.log(myCreatedDate.toLocaleString());     // 10/31/2024, 12:00:00 AM

myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());       // Tue Jan 23 2024

myCreatedDate = new Date("08-31-2024")
console.log(myCreatedDate.toLocaleString());     // 8/3/2024, 12:00:00 AM

//for quizez, poll, fastest time, timer
let myTimeStamp = Date.now()
console.log(myTimeStamp);                // 1728834001773 : in milliseconds    : for comparisons
console.log(myCreatedDate.getTime());    // 1725062400000

// to convert in sec
console.log(Math.floor(Date.now()/1000));    // 1728834001

let newDate = new Date()
console.log(newDate)                //2024-10-13T15:31:12.878Z
console.log(newDate.getMonth()+1)   // 10  -+1 to start with 1 not 0
console.log(newDate.getDay())       // 0 : SUnday
console.log(newDate.getDate);


console.log(myCreatedDate.toLocaleString('default', {
    weekday: "long",    //Sunday
    weekday: "narrow",  //T
    weekday: "short"    //Sun 
}))