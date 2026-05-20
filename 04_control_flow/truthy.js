const userEmail = []
// if(userEmail){
//     console.log("Got the email");  
// }
// else{
//     console.log("Don't have email");
// }

//falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// "0",'false," ",[],{},function(){},true,1,-1,BigInt 1n

// if(userEmail.length === 0){
//     console.log("Array is empty");   
// }

const  emptyObj = {} 
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


//Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);

//Ternary operator
// consdition > true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


