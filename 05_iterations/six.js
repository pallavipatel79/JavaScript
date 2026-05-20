// const coding = ["js","cpp","python","java","java"]  

// const values = coding.forEach((item) => {//forEach doesn't return anything
//     console.log(item)
// })
// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 4)//return values

// const newNums = myNums.filter((num) => { //if you open scope ,must add the return keyword
//     return num > 4
// })

const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: "Book 1", genre: "Fiction",publish: 1981},
    {title: "Book 2", genre: "Non-Fiction",publish: 1995},
    {title: "Book 3", genre: "Fiction",publish: 2005},
    {title: "Book 4", genre: "Non-Fiction",publish: 2010},
    {title: "Book 5", genre: "Fiction",publish: 2015},
    {title: "Book 6", genre: "Non-Fiction",publish: 2020},
    {title: "Book 7", genre: "Fiction",publish: 2021},
    {title: "Book 8", genre: "Non-Fiction",publish: 2022},
    {title: "Book 9", genre: "Fiction",publish: 2023},
]

// const userBooks = books.filter((bk) => bk.genre === "Fiction")

// const userBooks = books.filter((bk) => bk.publish >= 2000)

const userBooks = books.filter((bk) => bk.genre === "Fiction" && bk.publish >= 2000)
console.log(userBooks);
