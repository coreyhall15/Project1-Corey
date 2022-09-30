//**********************
//Control Flow
//**********************

//If Statements
//if expression ..true else...false

// if (5 > 2){
//     console.log("Hello") 
// } else {
//     console.log("Goodbye")
// }

// if ( 3 > 5) {
//     console.log("Hello")
// } else {
//     console.log("Goodbye")


//Everything is true except false, null, 0, nan, undefined, and ""
// "false", "null", "undefined"....all strings are true except empty strings ""

//-------------------------------
// Loops
//-------------------------------


//while loop
//whie (expression) {repeat this code as long as expression is true}

// let counter = 0
// while (counter < 10){
//     console.log("counter is now .....", counter)
//     counter += 1
// }

// //For Loop
// // for(declare counter;expression;increment)
// for (let counter = 0; counter < 10; counter += 1){
//     console.log(counter)
// }

// Write me a loop that will log the counter if the counter is 
//even and increment by 3 on each loop, and should loop till the counter hits 100.
for (let counter = 0; counter <= 100; counter +=3){
    if (counter % 2 === 0)
    console.log(counter)
}

