// for_each loop : higher order function
const coding = [ "js", "cpp", "java", "py" ]
// as the function is a callback fun, so it will not have name.
coding.forEach( function (item) { // item: js, cpp, etc
    console.log(item);
})   
// o/p-
// js
// cpp
// java
// py

coding.forEach( (val) => {
    console.log(val);
})
// o/p-
// js
// cpp
// java
// py

function printMe(item) {
    console.log(item)
}
coding.forEach(printMe) //printMe() : se execution ho jaayega, here we are just giving the reference isliye sirf 'printMe' use kiya hai, execution will be done above only, just pass the function.
// o/p- 
// js 
// cpp
// java
// py

function printMe(item, index) {
    console.log(item, index)
}
coding.forEach(printMe) 
// o/p- 
// js 0
// cpp 1
// java 2
// py 3

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = 9

// parameters access: item, index, arr(coding)
coding.forEach( (item, index, arrlist) => {
    console.log(item, index, arrlist);
    
})
// js 0 [ 'js', 'cpp', 'java', 'py' ]
// cpp 1 [ 'js', 'cpp', 'java', 'py' ]
// java 2 [ 'js', 'cpp', 'java', 'py' ]
// py 3 [ 'js', 'cpp', 'java', 'py' ]

[ 4, 5, 7 ].forEach( (value, key, arr) => console.log(arr))
// when " " or `` used
// a[0] = 4, arr = 4,5,7
// a[1] = 5, arr = 4,5,7
// a[2] = 7, arr = 4,5,7

// when simply printed
// 4 0 [ 4, 5, 7 ]
// 5 1 [ 4, 5, 7 ]
// 7 2 [ 4, 5, 7 ]

// [ {}, {}, {} ]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item) // yeh object ka access mila, arrays mai se, lekin hume unki properties chaahiye
    // { languageName: 'javascript', languageFileName: 'js' }
    // { languageName: 'java', languageFileName: 'java' }
    // { languageName: 'python', languageFileName: 'py' }
    console.log(item.languageName)
    // javascript
    // java
    // python
})