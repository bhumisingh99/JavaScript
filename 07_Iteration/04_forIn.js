// for in loop

const myObj = {
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const i in myObj) {
    console.log(i);
         
}
// o/p-
// js
// cpp
// rb
// swift
for (const i in myObj) {
    console.log(myObj[i]);      
}
// o/p-
// javascript
// C++
// ruby
// swift by apple
for (const i in myObj) {
    console.log(`${i} shortcut is for ${myObj[i]}`);      
}
// o/p-
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


// for arrays
const programming = [ "js", "java", "py", "cpp", "rb" ]
for (const key in programming) {
    console.log(key)
}
// o/p-
// 0
// 1
// 2
// 3
// 4
for (const key in programming) {
    console.log(programming[key]);
}
// o/p-
// js
// java
// py
// cpp
// rb

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
for (const key in map) {
    console.log(key);
    
}
// o/p- blank, as map is not iterable 