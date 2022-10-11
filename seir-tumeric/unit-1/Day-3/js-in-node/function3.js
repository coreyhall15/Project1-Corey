//--------------------
//Function Return Values
//---------------------
//Parameters and arguments send stuf into a function
//Return values is stuff sent out of the function
//can only return one value
//the function stops once the value is returned

const buyAPony = (name) => {
    return{
        name,
        ride: () => console.log("You are riding a pony")
    }
}

const myPony = buyAPony("Lightning")
console.log(myPony)
myPony.ride()

//another example

const returnsSomething = () => {return 1}
const returnNothing = () => {}

const resultSomething = returnsSomething()
const resultNothing = returnNothing()

console.log(resultSomething)
console.log(resultNothing)

//I want to add two numbers and then square them

const addSquare = (num1, num2) => {
    return (num1 + num2)**2
}

const result = addSquare(4,2)
console.log(result)

const addNums = (x,y) => {return x + y}
const squareNums = (x) => {return x**2}

const result2 = squareNums(addNums(2,2))
console.log(result2)