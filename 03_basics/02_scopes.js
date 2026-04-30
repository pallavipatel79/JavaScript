let a = 100
// const b = 20
var c = 300

// if(true){
//     let a = 10
//     const b =20
//     var c = 30
//     console.log("INNER: ",a);
// }
 

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Pallavi"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Pallavi"
    if(username === "Pallavi"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// *****************Intresting*********************
addone(6)//no error 
function addone(num){
    return num + 1
}
// addone(6)

addTwo(6)//will show error(using before declaration) because stored in a variable
const addTwo = function(num){
    return num + 2
}
addTwo(6)