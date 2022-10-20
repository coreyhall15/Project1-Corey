// given this array


    // given this array

const arr = [1,2,3,4,5,6]

// us .forEach to loop over the array and log each element

arr.forEach(function(item, index){console.log(item)})


// use .map to loop over the array return an array with each value + 2

console.log(arr.map(function(item, index){ return item + 2}))

// item   |    return value    |  resulting array so far
//     1   |         3           |      [3]      
//     2   |         4           |      [3,4] 
//     3   |         5           |      [3,4,5]    
//     4   |         6           |      [3,4,5,6] 
//     5   |         7           |      [3,4,5,6,7] 
//     6   |         8           |      [3,4,5,6,7,8] 


// use .reduce to loop over array and add all the value

console.log(arr.reduce(function(acc, item, index){ return acc + item }, 0))

// acc   |    item    |  return value
//   0    |     1       |       1    
//   1    |     2       |       3  
//   3    |     3       |       6
//   6    |     4       |       10  
//   10    |     5       |       15  
//   15    |     6       |       21  