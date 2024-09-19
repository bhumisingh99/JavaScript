// to define the constant variables
const accountId = 234

// to define variables
let accountEmail = "bs14-400@gmail.com"
// value not assigned, so o/p : undefined
let accountState

// preferred not to be used
var accountPass = "123"
// this has limitations for scope : issue in block scope and function scope  

// default : as js is very secured lang
accountCity = "Jaipur"

// to print
console.table([accountId, accountEmail, accountPass, accountCity, accountState])

accountEmail = "basingh@gmail.com"
// as accountId is constant, so cannot be redefined
// accountId = 123 : not allowed
accountPass = "9876"
accountCity = "Tundla"

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
