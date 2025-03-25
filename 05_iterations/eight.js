const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc,currVal) {
//     console.log(`acc : ${acc} & currVal : ${currVal}`);
//     return acc + currVal
// }, 0)
// // acc : 0 & currVal : 1
// // acc : 1 & currVal : 2
// // acc : 3 & currVal : 3

// console.log(myTotal);//6


const myTotal = myNums.reduce( (acc,currVal) => acc+currVal , 0 )
console.log(myTotal);//6


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "dsa course",
        price : 1800
    },
    {
        itemName : "mobile dev course",
        price : 5000
    }
]

const totPrice = shoppingCart.reduce( (acc,item) => acc + item.price , 0 )
console.log(totPrice);// 9799
