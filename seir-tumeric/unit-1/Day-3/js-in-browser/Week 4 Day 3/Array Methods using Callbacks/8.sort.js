const { dogs } = require("./data");

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
// [].sort(( 1. a, 2. b, ) => {})
// a or the 'currentItem' is the first element for comparison.
// b or the 'nextItem' is the second element for comparison.


// 1. Sort the dogs age ascendingAge order
// const asc = dogs.sort((a,b) => {
//     if(a.age < b.age){
//         return -1;
//     } else if(a.age > b.age){
//         return 1;
//     }else {
//         return 0;
//     }
// });

// console.log(asc);


// // 2. Sort the dogs age desc order
// const desc = dogs.sort((a,b) => {
//     if(a.age < b.age){
//         return 1;
//     } else if(a.age > b.age){
//         return -1;
//     }else {
//         return 0;
//     }
// });

// console.log(desc);

const mixed = [1, 200, 40, 5, "700", "80", "9"];

// const sortedMixed = mixed.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(sortedMixed);

// const sortedMixedTakeTwo = mixed.sort((a, b) => {
//     if (parseInt(a) < parseInt(b)) {
//         return -1;
//     } else if (parseInt(a) > parseInt(b)) {
//         return 1;
//     } else {
//         return 0;
//     }
// });


// console.log(sortedMixedTakeTwo);