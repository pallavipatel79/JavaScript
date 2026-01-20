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

// console.log(typeof heros);
//https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html

//*********************************************************
//Stack (Primitive), Heap (Non-Primitive)
let youtubeName = "hiteshchoudharydotcom"

let anothername = youtubeName
anothername = "chaiaurcode"
console.log(youtubeName);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne
/*gives reference of the value of userOne
in the heap to the usertwo

giving reference means any change done
will reflect in the original value
*/
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
