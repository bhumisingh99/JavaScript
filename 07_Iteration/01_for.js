// loops or iteration

// for loop : it jumps alot here and there
const arr = [ 5, 6, 7, 3, 2, 8 ]
console.log(arr);
for(let i=0; i<arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
for(let i=0; i<=10; i++) {
    console.log(`outer loop: ${i}`);
    for( let j=0; j<=10; j++) {
        console.log(`inner loop: ${j} | outer loop: ${i}`);
    }
}
// table
for(let i=0; i<=10; i++) {
    for( let j=0; j<=10; j++) {
        console.log(`${i}*${j}=${i*j}`);  
    }
    console.log();
}

let myArr = [ "flash", "Batman", "Superman" ]
for(let i=0; i<myArr.length; i++) {
    const element = myArr[i]
    console.log(element);
}

// break and continue
for(let i=1; i<=20; i++) {
    if(i==5) {
        console.log("5 detected");
        break;
    }
    console.log(`value of i is ${i}`);
}
// o/p-
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 detected
let myNArr = [ 6, 5, 7, 4, 3, 5, 2, 1 ]
for(let i=0; i<myNArr.length; i++) {
    if(myNArr[i]==5) {
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${i}`);
}
// o/p-
// value of i is 0
// 5 detected
// value of i is 2
// value of i is 3
// value of i is 4
// 5 detected
// value of i is 6
// value of i is 7