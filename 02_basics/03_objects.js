//singleton -> made with constructor
// Object.create

//Object literals -> not singleton

const mysym = Symbol("key1")
const JsUser = {
    name: "Pallavi",
    "full name" : "Pallavi Patel",
    [mysym]: "mykey1",//square brackets makes the key a symbol
    age: 18,
    location: "Jaipur",
    email: "pallavipatel@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} 

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

// JsUser.email = "palla@gpt.com"
// Object.freeze(JsUser)//cant be changed after this
// JsUser.email = "pallavi@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

