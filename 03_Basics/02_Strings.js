const name = "Bhumi "
const repCount = 2
// console.log(name + repCount+" hey!") : outdated

// backtick : ` ` 
// String interpolation : in this we create placehoders, so any var we declare can be injected directly there
//ex :
console.log(`Hello my name is ${name.toUpperCase()}and my repo count is ${repCount}`)

//to declare string another way
const gameName = new String("BhumiS") //object used and in the constructor name is passed

console.log(gameName)             //[String: 'BhumiS']
console.log(gameName[5])          //S
console.log(gameName.__proto__)   //{} : this object is shown empty, but actually it is not

// methods
console.log(gameName.length)            //6  //indexing : 0 - n-i
console.log(gameName.toLowerCase());    //bhumis
console.log(gameName.charAt(3))         //m
console.log(gameName.indexOf("S"))      //5

const newStr = gameName.substring(0,5)  //means 0 -> =4
console.log(newStr);        //Bhumi

const anStr = gameName.slice(0,-4)
console.log(anStr);         //Bh

const newString = "     Bhumi"
console.log(newString)           //   Bhumi
console.log(newString.trim())    //Bhumi

const url = "https://bhumi.com/bhumi%20singh"
console.log(url.replace('%20', '-'));   //https://bhumi,com/bhumi-singh
console.log(url.includes('sundar'))     //false : includes check if it exist or not

const gameName1 = new String("Kunal-Singh-com")
console.log(gameName1.split("-")); //["Kunal", "Singh", "com"] : to convert it in array

//similarly many more are there : refer notes in nb