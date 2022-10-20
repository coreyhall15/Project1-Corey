
const { dogs } = require("./data.js");

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// [].some(( 1. element, 2. index, 3. array ) => {})
// Element argument represents the array's element value
// Index argument represents the array's index value (optional)
// Array arguement represents the array's value (optional and rarely ever used)


// 1. Test if the array has at least one dog that lives in brookyn
// const islivingInBrooklyn = dogs.some((element, index) => {
//     return element.residence.toLowerCase() === 'BrOoKlYn'.toLowerCase();
// });

// console.log(islivingInBrooklyn)

// 2. Test if the array has at least one dog that lives in Jersey

// const islivingInJersey = dogs.some(element => {
//     return element.residence.toLowerCase() === 'jErSeY'.toLowerCase();
// })

// console.log(islivingInJersey)