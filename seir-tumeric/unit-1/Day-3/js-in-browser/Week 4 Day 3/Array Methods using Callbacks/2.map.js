const { dogs } = require('./data.js')

console.log(dogs)


// map()
// 1. Create a function that return an array of dog names using the map method.
// Invoke the function using the dogs array as its parameter

const mapNames = arr => {
    let names = arr.map((element, index) => {
        return element.name
    })
    return names;
}
console.log(mapNames(dogs))


// map()
// 2. Create a function that return an array of dog names and ages using the map method.
// Invoke the function using the dogs array as its parameter


const mapNamesAndAges = arr => {
    let namesAndAges = arr.map((element, index) => {
        return {name: element.name, age: element.age}
    })
    return namesAndAges;
}
console.log(mapNamesAndAges(dogs))



// 3. Create a function that adds an 'id' property using the index arguement using the map method.
// Invoke the function using the dogs array as its parameter

const obj = {name: 'odell beckham jr'}
obj.postion = 'wide reciever'

console.log(obj)


const addingIds = arr => {
    let addedId = arr.map((element, index) => {
        element.id = index;
        return element
    })
    return addedId;
}
console.log(addingIds(dogs))