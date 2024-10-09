let score = 99
console.log(score)
//converting to number
let valueInNumber = Number(score)
console.log(valueInNumber)           //99 
console.log(typeof valueInNumber)    //number

let score1 = "99abc"
console.log(score1)
//converting to number
let valueInNumber1 = Number(score1)
console.log(valueInNumber1)          //NaN : Not a Number
console.log(typeof valueInNumber1)   //number

let score2 = null
console.log(score2)
//converting to number
let valueInNumber2 = Number(score2)
console.log(valueInNumber2)          //0
console.log(typeof valueInNumber2)   //number

let score3 = undefined
console.log(score3)
//converting to number
let valueInNumber3 = Number(score3)
console.log(valueInNumber3)          //NaN
console.log(typeof valueInNumber3)   //number

let score4 = true
console.log(score4)
//converting to number
let valueInNumber4 = Number(score4)
console.log(valueInNumber4)          //1
console.log(typeof valueInNumber4)   //number

let score5 = "Bhumi"
console.log(score5)
//converting to number
let valueInNumber5 = Number(score5)
console.log(valueInNumber5)          //NaN
console.log(typeof valueInNumber5)   //number

//In Short
// 33 :number            -> 33 : Number
// "33ab" : string       -> NaN : Number
// null : object         -> 0 : Number
// undefined : undefined -> NaN : Number
// "Bhumi" : string      -> NaN : Number
// true : boolean        -> 1 : Number
