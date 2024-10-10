// stack(primitive) : temporary variable
// heap(non-primitive) : refernce of the original value(what ever is stored).

//primitive/Stack
let ytChannel = "ApnaCollege"
let anotherName = ytChannel
anotherName = "ChaiAurCode"
console.log(anotherName)   //ChaiAurCode
console.log(ytChannel)     //ApnaCollege


//object(non-pri)/Heap
let userOne = {
    email : "bs140400@gmail.com",
    upi : "user@bob"
}

let userTwo = userOne
userTwo.email = "basingh120@gmail.com"
console.log(userOne.email);    //basingh12-@gmail.com
console.log(userTwo.email)     //basingh12-@gmail.com