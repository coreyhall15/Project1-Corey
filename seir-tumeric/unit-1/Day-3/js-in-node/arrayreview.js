// Review: Assign an array with three strings to a variable called cheeses

const cheeses = ["Brie", "Gouda", "Cheddar"]
console.log("New Array:", cheeses)

// Review: How would you add a cheese to cheeses to the end of the array and to the beginning of the array

cheeses.unshift("Parmasean")
cheeses.push("Pepper Jack")
console.log("Added Items:", cheeses)

// Review: How would you remove a cheese from cheeses from the front and back

cheeses.shift()
cheeses.pop()
console.log("Removed Items:", cheeses)

// Review: how would assign the third cheese in cheeses to a new variable called cheese

const cheese = cheeses[2]
console.log("single cheese:", cheese)

// Review: Write me a loop over the cheese array that will console.log each cheese

console.time()
for (let index = 0; index < cheeses.length; index += 1 ){
    console.log(cheeses[index])
}
console.timeEnd()

console.time()
for (let cheese of cheeses){
    console.log(cheese)
}
console.timeEnd()

console.time()
cheeses.forEach((cheese) => {console.log(cheese)})
console.timeEnd()

// multi-dimesnional array

const nums = [1,2,3, [4,5,6,[7,8,9]]]

// access 9
console.log("9:" , nums[3][3][2])

// access 5
console.log("5:" , nums[3][1])

// access 2
console.log("2:" , nums[1])