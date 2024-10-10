// console.log(2==1)
// console.log(2>1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2!=1)

//complexity, when two other dataTypes are compared
//here "2" & "02" is automatically converted in number
// console.log("2"<1)
// console.log(1=="01")

//more complexity 
//contradiction, because : an equality check(==, !=) and comparison check(>, <, >=, <=) work differently. Comparisons convert null to number, treating it as 0. 
// console.log(null>0)          //false  0>0
// console.log(null<0)          //false  0<0
// console.log(null>=0)         //true   0>=0

// console.log(null!=0)         //true   null!=0
// console.log(null==0)         //false  null==0

// console.log(undefined>0)     //false  undefined>0
// console.log(undefined<0)     //false  undefined<0
// console.log(undefined>=0)    //false  undefined>=0
// console.log(undefined==0)    //false  undefined==0
// console.log(undefined!=0)    //true   undefined!=0

// //Strict check(===), not only values but also dataTypes
// console.log("2"===1)         //false
// console.log(undefined == null)   //false

// console.log(null>"2")        //false   0>2
// console.log(null<"2")        //true    0<2
// console.log(null>="2")       //false   0>=2
// console.log(null!="2")       //true    null!=2
console.log(null=="0")       //false   null==0

// console.log(undefined == null)  //true as both of them has falsy values and due to the coercion.