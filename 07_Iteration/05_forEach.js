// for each loop : higher order function
const coding = [ "js", "cpp", "java", "py" ]
coding.forEach( function (item) { // item: js, cpp, etc
    console.log(item);
})   
// o/p-
// js
// cpp
// java
// py
coding.forEach( (val)=> {
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
coding.forEach(printMe) // here we are just giving the reference, execution will be done above only, just pass the function;[[[]]]
// o/p- 
// js
// cpp
// java
// py

// parameters access: item, index, arr(coding)
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})
// js 0 [ 'js', 'cpp', 'java', 'py' ]
// cpp 1 [ 'js', 'cpp', 'java', 'py' ]
// java 2 [ 'js', 'cpp', 'java', 'py' ]
// py 3 [ 'js', 'cpp', 'java', 'py' ]


// [ {}, {}, {} ] : working to get access of these kind of data
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
})
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'py' }
myCoding.forEach( (item) => {
    console.log(item.languageName) // for properties
})
// javascript
// java
// python





