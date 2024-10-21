// mostly used in rect, shopping carts

const myArr = [ 1, 2, 3, 4, 5 ]

const myTOtal = myArr.reduce( function (acc, currval) { 
    console.log(`acc: ${acc} and currval: ${currval}`)
    // or
    // console.log("acc: "+ acc+ " and currval: "+currval)
    return (acc+currval)
}, 0)
console.log(myTOtal);

// or
const myTOtal1 = myArr.reduce( (acc, currval) => acc+currval , 0)
console.log(myTOtal1);

// the above can be done in for, while, do-while, but not in forOf, forIn, forEach, filter(), map()

const shoppingCart = [
    {
        item: "js Course",
        price: 5999
    },
    {
        item: "py Course",
        price: 3999
    },
    {
        item: "data science Course",
        price: 9999
    },
]

const totalPriceToPay = shoppingCart.reduce( (acc, curr) => (acc+curr.price), 0)
console.log(totalPriceToPay)  // 19997