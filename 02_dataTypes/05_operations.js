let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) //2^3
console.log(2/2)
console.log(2%3)

let str1 = "hello"
let str2 = " Bhumi"
let str3 = str1+str2
console.log(str3)

//complexity
let n1 = 1
let n2 = 2
let n3 = "4"
console.log(n1+n2+n3)  //when no. is added to string so first operation will perform then string would be printed as it is.

let n4 = "9"
let n5 = "8"
let n6 = 9
console.log(n4+n5+n6) //when string occurs first then the no coming later is treated as the string 

let n7 = 5
let n8 = 4
let n9 = "9"
let n10 = 3
console.log(n7+n8+n9+n10)

//not preferred, consider as a messy codes, reduces readability
console.log(3+4*5%2)
console.log(+true)     //o/p : 1
// console.log(true+)  //o/p : error
console.log(+"")       //o/p : 0
let num1, num2, num3
num1 = num2 = num3 = 2+2

//refer mdn for prefix and postfix & ecma for conversion
let gamecounter = 100
gamecounter++
console.log(gamecounter)
