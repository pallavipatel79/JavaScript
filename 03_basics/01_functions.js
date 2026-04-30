function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("L");
    console.log("A");
    console.log("V");
    console.log("I");
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(3,"4")
// addTwoNumbers(3,4)

function addTwoNumbers(num1,num2){
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(3,4)
// console.log("Result : ",result);


function loginUserMessage(username = "sam"){//atleast it have sam as username ,if we pass another value sam will get overwritten
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Pallavi"));
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Pallavi",
    price: 599
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
