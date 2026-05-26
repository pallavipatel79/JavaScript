const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(discriptor);


// console.log(Math.PI);
// Math.PI = 7
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
    }
}
//here in order to get the discriptor you need to pass object and the property for which you want to get the discriptor

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// const chaiDiscriptor = Object.getOwnPropertyDescriptor(chai, 'name')
// console.log(chaiDiscriptor);

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

//if we do enumeration false some of the properties of the object will not be visible in the loop and if we do writable false then we cannot change the value of that property.