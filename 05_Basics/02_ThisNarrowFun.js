const User = {
    username: "anshika",
    price: "Rs. 999",
    // we want, only the user entering this function being able to access this msg.
    welcomeMessage : function () {
        // for different user we want different msg to be printed
        console.log( `${this.username}, welcome to website` );   
        console.log(this)      
    }
}
// this refers to the current context, current context : the scope currently we are working in is current, and the data in it is context
User.welcomeMessage()   // anshika, welcome to website
                        //  {
                                // username: 'anshika',
                                // price: 'Rs. 999',
                                // welcomeMessage: [Function: welcomeMessage]
                        //  }

User.username = "Sam"   // context is changed

User.welcomeMessage()   // Sam, welcome to website
                        //  {
                                // username: 'Sam',
                                // price: 'Rs. 999',
                                // welcomeMessage: [Function: welcomeMessage]
                        //  }

console.log(this)       // {}
// outside the scope, what is the current context, gives {}

// engine in browser,now- node, deno, bun: 'stand-alone' engine
// when engine runs inside the brower, the most global obj is window{} obj
// in inspect - Window{}

// for functions this gives undefined, so this doesn't work for function as well.e
function chai() {
    let username = "anshika"
    console.log(this.username); 
}
chai()    // undefined

const chaii = function() {
    let usName = "anshu"
    console.log(this.usName);    
    
} 
chaii()   // undefined

// Arrow function
const chaiii = () => {
    let userName = "anshika"
    console.log(this.userName);
}
chaiii()    // undefined

// arrow function
const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3, 8));    // 11

// implicit return: when return keyword is not used
const add2 = (num1, num2) => num1+num2 
console.log(add2(8,7));
// or
const add3 = (num1, num2, num3) => (num1+num2+num3)
console.log(add3(6, 5, 8));

// to return object
const obj = (num) => ( {username: "anshika"} )
console.log(obj());   // { username: 'anshika' }

const myAr = [ 4, 6, 2, 7 ]
myAr.forEach( function() {} )
// or
myAr.forEach( () => {} )