// const instaUser1 = new Object()    // singleton object
// console.log(instaUser1);           // {}

const instaUser = {}             // not a singleton object

instaUser.id = "456mno"
instaUser.name = "Knight"
instaUser.isLoggedIn = false

console.log(instaUser);                                 // {}
console.log(Object.keys(instaUser));                    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser));                  // [ '456mno', 'Knight', false ]
console.log(Object.entries(instaUser));                 // [ [ 'id', '456mno' ], [ 'name', 'Knight' ], [ 'isLoggedIn', false ] ]
console.log(instaUser.hasOwnProperty('isLoggegIn'));    // false, as isLoggedIn exists, not isLoggegIn

const regularUse = {
    email : "Some@gmail.com",
    fullname : {
        userFullName: {
            firstName: "Bhumi",
            lastName: "Singh"
        }
    }
}
console.log(regularUse.fullname);                        // { userFullName: { firstName: 'Bhumi', lastName: 'Singh' } }
console.log(regularUse.fullname.userFullName);           // { firstName: 'Bhumi', lastName: 'Singh' }
console.log(regularUse.fullname.userFullName.firstName); // Bhumi


// optional chaining: using ? , if exists then only perform some function

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// kind of push obj inside obj
const obj3 = { obj1, obj2 }
console.log(obj3);           // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// combining
// const obj4 = Object.assign( obj1, obj2 )    // target, source
// console.log(obj4);        // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1);        // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// combining : Object.assign()
const obj4 = Object.assign( {}, obj1, obj2 )    // target, source
console.log(obj4);           // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1);        // { '1': 'a', '2': 'b' }

// combining using spread : {...1, ...2, ...3}
const obj5 = {...obj1, ...obj2}  
console.log(obj5);               // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }