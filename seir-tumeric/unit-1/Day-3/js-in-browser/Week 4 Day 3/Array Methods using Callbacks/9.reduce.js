const { dogs } = require("./data");

// in each loop the function is passed the current accumulator (a cumulative value that starts with the starting value), the item, and the index.
// The return value of the function becomes the accumulator on the next loop.
// Reduce returns the value of the accumulator at the end.
// [].Reduce(( 1. accumulation, 2. element, 3. index) => {}, 4. starting accumulation value)
// Accumulation's accumulated value
// Element argument represents the array's element value
// Index argument represents the array's index value (optional)


// 1. What is the cumulative age of all dogs that aren't adopted
// const cumulativeAgeNotAdopted = dogs.reduce((acc, element, index) => {
//     return element.adopted ? acc : acc + element.age;
// }, 0);
// console.log(cumulativeAgeNotAdopted);


// 2. I want to write a sentence that names all the dogs
// const listNames = dogs.reduce((acc, element, index) => {
//     if(index === 0){
//         acc += `I have a dog named ${element.name}`
//     } else {
//         acc += ` and a dog named ${element.name}`
//     }
//     return acc;
// }, '');
// console.log(listNames);