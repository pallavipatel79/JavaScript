const user = {
    username: "Pallavi",
    loginCount: 7,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");    
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


//constructor function*************

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this //implicitly returned by default
}
// const userOne = User("Pallavi", 7, true)
// const userTwo = User("Chai", 3, false) // overwrite userOne
// console.log(userOne);

const userOne = new User("Pallavi", 7, true)
const userTwo = new User("Chai", 3, false) // overwrite userOne
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);//reference to the constructor function

//step 1: create an empty object 
//step 2: costructor function is called with the new keyword and the empty object is passed as this
//step 3: the properties and methods are added to the empty object using this keyword and the constructor function is executed
//step 4: the object is returned from the constructor function and assigned to the variable userOne and userTwo

