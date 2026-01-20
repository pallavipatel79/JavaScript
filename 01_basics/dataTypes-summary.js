//Primitive
// 7 types : String, Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3648329397327891n


//reference (Non primitive)
//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name : "Pallavi",
    age : 19,
}
const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros);
//https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html