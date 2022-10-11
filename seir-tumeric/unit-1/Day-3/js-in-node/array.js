//-------------------
//Arrays
//-------------------

//1. getLength(arr)    should return length of arr
//2. getFirst(arr)     should return the first element of arr
//3. getLast(arr)      should return the last element of arr
//4. pushElement(arr)  should push an element to arr, and then return arr
//5. popElement(arr)   should pop an element from arr, and then return arr


//declare an array
const instructionTeam = ["Alex", "Billie", "David", "Kyle", "Max"]

//log the whole array
console.log(instructionTeam)

//access the first element
console.log(instructionTeam[0])

//edit a value
instructionTeam[0] = "Corey"
console.log(instructionTeam)

//Array Methods (Adding and subtracting)

//Adding to the array
instructionTeam.push("August") //Push adds to the end of the array
instructionTeam.unshift("Amber") // adds to the beginning of the array
console.log(instructionTeam)

//Subtrating from the array
instructionTeam.pop() //removes last item
instructionTeam.shift() //removes first item
console.log(instructionTeam)


//Create an array with 3 characters from your favorite TV show
// log the array and the length
// remove the last and first value of the array
// add another character to the front and back of the array
// log the array
// paste your code as a snippet in a thread on slack and give the post an emoji

const lawNorder = ["Stabler", "Benson", "Tutoila"]

console.log(lawNorder)
console.log(lawNorder.length)

lawNorder.pop
lawNorder.shift

console.log(lawNorder)

lawNorder.push("Rollins")
lawNorder.unshift("Cragen")

console.log(lawNorder)

//Splice
//array.splice(where to start splicing, how many things to remove, anything you want to add)

const nums = [1, 5, 6, 7, 3]
nums.splice(1,3,2)
console.log(nums)

//Looping over an array

const pokemon = ["Pikachu", "Mew", "Snorlax"]

for(let counter = 0; counter < pokemon.length; counter +=1)
{
    const poke = pokemon[counter]
    console.log(poke)
}

for (let poke of pokemon){
    console.log(poke)
}

//Multi-Dimesional Arrays.....arrays inside an array

// const arr = [1, 2, [3, 4,[5, 6,]],[7, 8]]
// console.log(arr[2] [0])

// //access the number 6
// console.log([2][2][1])

//google the array sort method and sort this array [5,4,3,2,1] 
const five = [ 5, 4, 3, 2, 1]
console.log(five.sort())

// google the array slice method and grab the middle three elements of this array [2,3,3,3,4]
const six = [2,3,3,3,4]
console.log(six.splice(1,3))

// google the array indexOf method and find the index of the number 7 in this array [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1]
const seven = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1]
console.log(seven.indexOf(7))

// google the string split method take the string "Hello World" and turn it into an array of letters
const d = "Hello World"
console.log(d.split(""))

// google the array join method and turn this array into a word s
const e = ["s","u","c","c","e","s"]
console.log(e.join(""))









