// ctrl + [ : <-----
// ctrl + ] : ----->
// ctrl + alt + downkey : for copy paste
// ctrl + d : to change the same key names in one go, ex. for loop 

// map() transforms every element in an array individually and creates a new array.
// filter() removes elements that are not required and creates a new array containing the ones needed. 
// reduce() reduces all array elements into a single value.


let myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const newNums = myNumbers.map( (num) => num+10)
console.log(newNums);   // [ 11, 12, 13, 14, 15, 16, 17, 18 ]

myNumbers.forEach( (val) => console.log(val+5) )
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13

// shouldnt be done
// const newNums = myNumbers.map( (num) => num>5)
// console.log(newNums); 
// [ false, false, false, false, false, true, true, true ]


// chaining 
const nN = myNumbers
            .map( (num) => {
                return num*10
            } )
            .map( (num) => num+5)
            .filter( (num) => { 
                return num>=55
            } )
console.log(nN);     // [ 55, 65, 75, 85 ]