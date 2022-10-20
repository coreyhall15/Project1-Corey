const { dogs } = require("./data");
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
// If no elements satisfy the testing function, -1 is returned.
// [].findIndex(( 1. element, 2. index, 3. array ) => {})
// Element argument represents the array's element value
// Index argument represents the array's index value (optional)
// Array arguement represents the array's value (optional and rarely ever used)

// 1. Find the first element where Sam is the owner
// const firstIndexWhereSamIsOwner = dogs.findIndex((element, index) => {
//     return element.owner === "Sam";
// });

// console.log(firstIndexWhereSamIsOwner);


// 2. Find the first index where the dog lives in Jersey
// const firstIndexWhereInJersey = dogs.findIndex((element, index) => {
//     return element.residence === 'Jersey';
// })

// console.log(firstIndexWhereInJersey)

// 3. Find the first element where Sam is the owner and lives in Brooklyn

// const firsIndexWhereSamIsOwnerAndInBk = dogs.findIndex((element, index) => {
//     return element.owner === "Sam" && element.residence === 'Brooklyn';
// });
// console.log(firsIndexWhereSamIsOwnerAndInBk)