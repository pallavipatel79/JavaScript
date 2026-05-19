const user = {
    username : "pallavi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome  to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//this -> currrent context

// console.log(this);


// function chai(){
//     let username = "Pallavi"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Pallavi"
    console.log(this.username);
    
}
// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }//explicit return

// const addTwo = (num1,num2) => num1 + num2 // implicit return

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username : "Pallavi"})//to return a object you must wrap it with parenthesis or it will be undefined

console.log(addTwo(3,4));


// const myArray = [2,5,3,7,8]
// myArray.forEach()