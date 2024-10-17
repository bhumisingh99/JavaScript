// truthy and falsy values 

const userEmail = "bshdbob@gmail.com"
// when we assume value to be true, i.e, truthy value
if(userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}
// for empty string, it gives false value
// for empty array, it gives true value

// falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values : [], "0", "false", " ", {}, function(){}, 

// to check arrays
const arr = []
if(arr.length === 0) {
    console.log("empty array");
}
// to chech obj
const obj = {}
if(Object.keys(obj)===0) {
    console.log("Object is empty");
}

// Nullish/Null Coalescing Operator(??) : null and undefined
let val1;
val1 = 5 ?? 10
console.log(val1);    // 5
val1 = null ?? 10
console.log(val1);    // 10
val1 = undefined ?? 15
console.log(val1);    // 15
val1 = null ?? 10 ?? 20
console.log(val1);    // 10

// Ternary Operator
console.log(4>5?"hello":"hii");    // hii
const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than or equal to 80") : console.log("more than 80");  // more than 80