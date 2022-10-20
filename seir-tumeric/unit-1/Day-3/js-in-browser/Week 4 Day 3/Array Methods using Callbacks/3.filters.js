const { dogs } = require('./data.js')

console.log(dogs)


// 1. Create an array with only of dogs under 5
// const underFive = dogs.filter((element, index) => {
//     return element.age < 5;
// });

const underFive = dogs.filter((element, index) => {
    return element.age < 5;
})

console.log(underFive)


// 2. Create an array with dogs that are in the even index position

const even = dogs.filter((element, index) => {
    return index % 2 === 0
})

console.log(even)

3. //Create an array with dogs that are in the odd index position

const odd = dogs.filter((element, index) => {
    return index % 2 !== 0
})

console.log(odd)


//Create an array of dogs with on owners

const noOwner = dogs.filter((element, index) => {
    return !element.owner
})

console.log(noOwner)

