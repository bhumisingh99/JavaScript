const coding = [ "js", "java", "python", "cpp" ]

//forEach does not return any value, as on printing values after using return statement, it gives 'undefined' as an o/p 
const values = coding.forEach( (item) => {
    console.log(item)
    // return item
})
// console.log(values);  // undefined
// hum har ek particular value( jese js, java, etc ) pr kuch condition lagaana chahte hai lekin aise woh possible nhi, uske liye -

let myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// it as well takes callback values
// on doing this nothing will we printed, so we have to store it somewhere
myNums.filter( (num) => num>4 )   // yeh operation forEach mai bhi hota hai, lekin forEach koi value return nhi karta hai, lekin filter value krta hai.
const newNums = myNums.filter( (num) => num>4 )
console.log(newNums);    // [ 5, 6, 7, 8, 9 ]

// complexity, agar scope start kar diya, mtlb { } use kr diye toh fir return kewword use krna he hoga
const newNum = myNums.filter( (num) => {
    num>4
})
console.log(newNum);     // []: an empty array
// return used, then-
const newNumss = myNums.filter( (num) => {
    return num>4  
})
console.log(newNumss);   // [ 5, 6, 7, 8, 9 ]
// or, when does not want to use the return 
const newNu = myNums.filter( (num) => (num>4) ) // implicit return 
console.log(newNu);      // [ 5, 6, 7, 8, 9 ]

// same thing in forEach
myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const newNuum = []
myNums.forEach( (val) => {
    if(val>4) {
        newNuum.push(val)
    }
} )
console.log(newNuum);   // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 },
    { title: 'Book Three', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 },
    { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 },
    { title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2004 }
]

//forOf
for (const element of books) {
    console.log(element);
    console.log(element.title);
}
// { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }       
// Book One
// { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 }       
// Book Two
// { title: 'Book Three', genre: 'Fiction', publish: 1981, edition: 2004 }     
// Book Three
// { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 }      
// Book Four
// { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2004 }
// Book Five
// { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 }       
// Book Six
// { title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2004 }     
// Book Seven

//forIn
for (const key in books) {
    console.log(books[key]);
    console.log(books[key].edition);
}
// { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }       
// 2004
// { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 }       
// 2004
// { title: 'Book Three', genre: 'Fiction', publish: 1981, edition: 2004 }     
// 2004
// { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 }      
// 2004
// { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2004 }      
// 2004
// { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 }       
// 2004
// { title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2004 }     
// 2004

//forEach
books.forEach( (item) => {
    console.log(item);
    console.log(item.genre);
})
// { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }       
// Fiction
// { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 }       
// History
// { title: 'Book Three', genre: 'Fiction', publish: 1981, edition: 2004 }     
// Fiction
// { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 }      
// History
// { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2004 }      
// Fiction
// { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 }       
// History
// { title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2004 }     
// Fiction

//forEach with condition
const newBook = []
books.forEach( (item) => {
    if( item.genre==="History"){
        newBook.push(item)
    }
})
console.log(newBook);
// [
//     { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 },    
//     { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 },
//     { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 }     
// ]

//filter
const ans = books.filter( function(bk) { return bk})
console.log(ans);
// [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }       
//     { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 }       
//     { title: 'Book Three', genre: 'Fiction', publish: 1981, edition: 2004 }     
//     { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 }      
//     { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2004 }      
//     { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 }       
//     { title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2004 } 
// ]

//filter with condition
let userBooks = books.filter( (bk) => bk.genre === 'History' )
console.log(userBooks);
// [
//     { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 },    
//     { title: 'Book Four', genre: 'History', publish: 1981, edition: 2004 },
//     { title: 'Book Six', genre: 'History', publish: 1981, edition: 2004 }     
// ]

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
} )
console.log(userBooks);
// [
//     { title: 'Book Two', genre: 'History', publish: 2004, edition: 2004 }     
// ]