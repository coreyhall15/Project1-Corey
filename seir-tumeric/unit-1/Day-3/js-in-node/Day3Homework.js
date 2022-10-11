/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log(foods, 'Exercise 1 Results');

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods[0] = "pizza"
foods[1] = "cheeseburger"

console.log(foods, 'Exercise 2 Results');

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

foods.unshift("taco")

console.log(foods, 'Exercise 3 Results');

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...

const favFood = foods[1]

console.log(favFood, 'Exercise 4 Results');

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...

foods.splice(1,0,"tofu")

console.log(foods, 'Exercise 5 Results');

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...

foods.unshift("sushi", "cupcake")

console.log(foods, 'Exercise 6 Results');

// /*
// Exercise 7:
//   - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
//   - Assign the new array to a variable named yummy.
// */

// // Complete Exercise 7 below...


 foods.splice(1, 1, "sushi", "cupcake") 
 console.log(foods, 'Exercise 7 Results');

 

// /*
// Exercise 8:
//   - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
// */

// // Complete Exercise 8 below...

const soyIdx = 'tofu'
const indexOf = foods.indexOf('tofu')
console.log(foods.indexOf('tofu', soyIdx, 'Exercise 8 Results'))

// /*
// Exercise 9:
//   - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
//     'taco -> sushi -> cupcake -> tofu -> cheeseburger'
// */

// // Complete Exercise 9 below...

const allFoods = ['taco', '->' ,'cupcake', '->' ,'tofu', '->', 'cheeseburger']
allFoods.join('->')
console.log(allFoods, 'Exercise 9 Results');

// /*
// Exercise 10:
//   - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
// */

// // Complete Exercise 10 below...

const hasSoup = foods.includes('soup, 0')

console.log(hasSoup, 'Exercise 10 Results');

// /*
// Exercise 11:
//   - Use either the for, for of, or forEach loops to iterate through the provided nums array and add each odd number to a new array named odds.
//   - Some helpful video about looping over arrays
//     > https://www.youtube.com/watch?v=JFf6ogtBUdo&t=144s
//     > https://www.youtube.com/watch?v=Yf6whlVj5qA&t=32s
//   - Hint: Initialize the odds variable to an empty array before the iteration.
// */

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// // Complete Exercise 11 below...
for (let counter = 0; counter <= 100; counter +=1){
  if (counter % 2 !== 0)
  console.log(counter)
let odds = nums.filter(n => n%2)

console.log('Exercise 11 Result: ', odds);

// /*
// Exercise 12:
//   - Use the loop to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
//   	- Add to the fizz array if the number is evenly divisible by 3.
//   	- Add to the buzz array if the number is evenly divisible by 5.
//   	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
// */

// // Complete Exercise 12 below...

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// /*
// Exercise 13:
//   - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
//   - Assume you don't know how many nested arrays numArrays contains.
// */

const numArrays = [
 	[100, 5, 23],
 	[15, 21, 72, 9],
 	[45, 66],
 	[7, 81, 90] ];

// // Complete Exercise 13 below...


const numList = [7,81,90]
console.log(numList,'Exercise 13 Result');

// /*
// Exercise 14:
//   - Given the above numArrays array, access the number 66 and assign to a variable named num.
// */

// // Complete Exercise 14 below...



let num = numArrays [2] [1]
console.log(num,'Exercise 14 Result:');

// /*
// Exercise 15:
//   - Given the above numArrays array, use nested loops to sum up all the numbers contained within numArrays and assign to a variable named total.
//   - Hint: Be sure to declare and initialize the total variable before the iterations.
// */

// // Complete Exercise 15 below...

const countArray = function(numsArray) {
  var sum = 1;
  for(let i = 0; i < Array.length; i++){
    if (Array.isArray(numsArray[i])) {
      sum += numsArray[i]
    }
  }
  return sum;
}

console.log(countArray([100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]))
  'Exercise 15 Result: ', total
}