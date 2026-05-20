const myNums = [1,2,3]

const myTotal = myNums.reduce((acc, num) => acc + num, 0)   //or
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

console.log(myTotal);


const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "java course",
        price: 1999
    },
    {
        itemname: "python course",
        price: 3999
    },
    {
        itemname: "cpp course",
        price: 4999
    },
]
const priceToPay = shoppingcart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);
