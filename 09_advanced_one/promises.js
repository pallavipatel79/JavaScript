const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Sync task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){//This will run when the promise is resolved
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"john",email:"john@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Pallavi",password:"123"}) 
        }
        else{
            reject("Error: Something went wrong")   
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;    
})
.then((username) => { //chaining first then's return value is passed to the next then
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"}) 
        }
        else{
            reject("Error: Something went wrong")   
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")//await is used to wait for the promise to resolve and get the response object
//         const data = await response.json()//change its type from readable stream to json
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})