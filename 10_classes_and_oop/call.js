function setUserName(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email,password){
    // setUserName(username)//call is not made but just reference to the function is made and execution contextis remoev from the stack
    // setUserName.call(username)// call is made and it holds the refence to the function
    setUserName.call(this, username) // call is made and it holds the refence to the function and this keyword is passed as the first argument
    this.email = email
    this.password = password
}
const chai = new createUser("Chai", "chai@example.com", "123")
console.log(chai);

