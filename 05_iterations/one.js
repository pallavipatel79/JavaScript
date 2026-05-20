// for
// for (let index = 0; index < 10; index++) {
//     console.log(index); 
// }



//nested loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(`outer loop element: ${element}`);
    
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     }
// }


let array = ["flash", "batman", "superman"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }



//break and continue
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detecteed 5`);
        break;
    }
    console.log(`value of i is ${index}`);
    
}
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detecteed 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
    
}