// switch
// behaviour is called "fall-through"
const month  = 7
switch(month) {
    case 1 : 
        console.log("Jan")
        break;
    case 2 : 
        console.log("feb")
        break;
    case 3 : 
        console.log("mar")
        break;
    case 4 : 
        console.log("apr")
        break;
    case 5 : 
        console.log("may")
        break;
    case 6 : 
        console.log("june")
        break;
    case 7 : 
        console.log("july")
        break;
    case 8 : 
        console.log("aug")
        break;
    case 9 : 
        console.log("sep")
        break;
    case 10 : 
        console.log("oct")
        break;
    case 11 : 
        console.log("nov")
        break;
    case 12 : 
        console.log("dec")
        break;
    default :
        console.log("invalid input");
        break;
}
// o/p - july
// if breaks not used, ex: month = 10, then 
// o/p-
// oct
// nav
// dec
// invalid input