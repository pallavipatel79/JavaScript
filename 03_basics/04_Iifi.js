//Immediately Invoked Function Expressions (IIFI)

(function chai(){ // named iifi
    console.log(`DB CONNECTED`);
})(); //when writing two IIFIs make sure to put the semicolon 
// chai()
//Sometimes pollution of global scope causes problem that's why we use iifi

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('pallavi')