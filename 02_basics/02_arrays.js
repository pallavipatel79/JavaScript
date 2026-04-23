const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeroes = marvel.concat(dc)
// console.log(allHeroes);

const all = [...marvel,...dc]//same as concat but we can concat more than 2 arrays at a time
// console.log(all);

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const rel_another = another.flat(Infinity)//flat takes the depth to which we want to flat 
console.log(rel_another);

console.log(Array.isArray("Pallavi"))//check if it is array
console.log(Array.from("Pallavi"));//convert into an array
console.log(Array.from({name: "Pallavi"}));//intresting(need to be specified whether to make array from keys or values)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
