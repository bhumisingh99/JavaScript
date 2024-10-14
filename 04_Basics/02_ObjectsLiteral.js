// Singleton
// object literal   : singleton is not created
// object object : ie. with constructor() :   singleton is created
// object.create

// in arrays only values are defined, but in object both key as well as  values are defined

const mySym = Symbol("key1")
// to use symbol as a key in an obj 

// object literal 
// name(key), rollno, location, email, etc itself is a string
const JsUser = {
    name: "Bhumi",
    "full Name": "Bhumi Singh",
    [mySym] : "mykey1",       // to assign it as a symbol   `
    // mySym : "mykey1",      // : to assign it as a string
    rollno: 22,
    location: "Jaipur",
    email: "bhumisingh@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Ssaturday"]
}

console.log(JsUser);    

// access
console.log(typeof JsUser.mySym);       // undefined    // String but not being used as symbol
console.log(typeof JsUser[mySym]);      // String       // string
console.log(JsUser.email);              // bhumisingh@google.com
// or
console.log(JsUser["email"]);           // bhumisingh@google.com
// console.log(JsUser.fullName);        [Wrong]
//or
console.log(JsUser["full Name"]);       // Bhumi Singh


// creating function
JsUser.greeting = function() {
    console.log("Hello JS USer");
    
} 

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
} 

console.log(JsUser.greeting);        // [Function (anonymous)] : function execute in hua hai sirf reference aaya hai
console.log(JsUser.greeting());      // Hello JS User 
                                     // undefined

console.log(JsUser.greetingTwo());   // Hello JS User, Bhumi
                                     // undefined
   
JsUser.email = "basingh120@google.com"
Object.freeze(JsUser)
JsUser.email = "bhumisingh@chatgpt.com"
console.log(JsUser["email"]);
console.log(JsUser);