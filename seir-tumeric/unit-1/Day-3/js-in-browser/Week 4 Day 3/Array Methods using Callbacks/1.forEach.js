const { dogs } = require('./data');

console.log(dogs)



// For Loop:
// 1. Create function which has a for loop that console.logs each ELEMENT.
// Invoke the function using the dogs array as its parameter

const forLoopLog = arr=> {
    for(let i = 0; i<arr.length; i+=1)
    console.log('element' , arr[i]);
}

forLoopLog(dogs);

// 2. Create a function which pushes the dog name into an empty array.
// After the for loop has finished, console.log the array which was previously empty and now has a list of names
// Invoke the function using the dogs array as its parameter

const name = [] //creates an array of dog names
const forLoopNames = arr => {
    for (let i = 0; i<arr.length; i+=1) {
    name.push(arr[i].name);

}
    console.log(name)
}
forLoopNames(dogs)




//For each loop for dogs

const forEachElement = arr => {
    arr.forEach((element, index) => {
        console.log(element)
    })

    forEachElement(dogs)
}

const forEachElementAndIndex = arr => { //prints elements and index of array
    arr.forEach((element, index) => {
        console.log(element, index);
    })

    forEachElementAndIndex(dogs)
}


//Create a function which pushes the dog name into an empty array.
// After the forEach has finished, console.log the array which was previously empty and now has a list of names
// Invoke the function using the dogs array as its parameter

const names = [] //creates an array of dog names
const forEachNames = arr => {
    arr.forEach((element, index) => {
    name.push(element.names);

})
    console.log(names)
}
forEachNames(dogs)


//Using teh for each to push into an empty array 2 properties
const nameAndAge = [];

//const addingNameAndAge= arr => {
  //  arr.forEach(element, index) => {
    //    nameAndAge.push({name: element.name, age: element.age
      //  })
        //console.log(nameAndAge)
   // }
