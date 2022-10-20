const { dogs } = require("./data");

// The find() method returns the FIRST element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// [].find(( 1. element, 2. index, 3. array ) => {})
// Element argument represents the array's element value
// Index argument represents the array's index value (optional)
// Array arguement represents the array's value (optional and rarely ever used)


// 1. Find the first element where Sam is the owner
// const firstElementWhereSamIsOwner = dogs.find((element, index) => {
//     return element.owner === "Sam";
// });

// console.log(firstElementWhereSamIsOwner);


// 2. Find the first element where the dog lives in Jersey
// const firstElementWhereInJersey = dogs.find((element, index) => {
//     return element.residence === 'Jersey';
// })

// console.log(firstElementWhereInJersey)

// 3. Find the first element where Sam is the owner and lives in Brooklyn

// const firstElementWhereSamIsOwnerAndInBk = dogs.find((element, index) => {
//     return element.owner === "Sam" && element.residence === 'Brooklyn';
// });

// console.log(firstElementWhereSamIsOwnerAndInBk)