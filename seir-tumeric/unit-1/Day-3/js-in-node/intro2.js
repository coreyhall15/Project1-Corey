//***************************
//Varriables
//***************************
// block scoping....block scoped variables only exists in the curly brackets they were created in

// const - block scoped...you cannot change it
const one = 1
console.log(one)

// let - block scoped....you can reassign it
let two = 2
console.log(two)
two = 3
console.log(two)

// var (NEVER USE) - not block scope....you can reassign it
var three = 3
console.log(three)
three = 4
console.log(three)
