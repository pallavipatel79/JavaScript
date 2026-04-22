// date
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString);
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);//millisecond 
console.log(myCreatedDate.getTime());//convert to millisec
console.log(Math.floor(Date.now()/1000));//convert to sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay);

// `${newDate.getDay()}` and time

newDate.toLocaleString('default',{
    weekday : "long"
})