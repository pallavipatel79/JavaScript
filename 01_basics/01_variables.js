const accountId = 124102053//can't be changes
let accountEmail = "pallavipatel@gmail.com"
var accountPassword = "12345"
accountCity = "Khargone"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);

/*
prefer not to use var becoause of 
issue in block scope and functional scope
*/

accountEmail = "pallavi01@gmail"
accountPassword = "6789"
accountCity = "seoul"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
