const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// There is an array I want you to grab a middle element and move it to the left.
// stop when that middle element is at its most left
// console logging it every time a move has been made
// [1, 2, 3, 4, 5, 6, 7, 8, 10] <----- starting
// [1, 2, 3, 5, 4, 6, 7, 8, 10]
// [1, 2, 5, 3, 4, 6, 7, 8, 10]
// [1, 5, 2, 3, 4, 6, 7, 8, 10]
// [5, 1, 2, 3, 4, 6, 7, 8, 10]


//1st iteration. Save the middle value in a variable

const moveLeft = (data) => {
    const middleIndex = Math.floor(data.length / 2);// step 1. Get the middle index
    const target = data[middleIndex] //step 2. Identify the number that needs to be moved
    for(let i = middleIndex - 1; i >=0; i -=1) //step 3. Create for loop that loops the number of times
        data[i +1] = data[i]; //step 4. take te value at index i and copy it over to the right
        data[i] = target;//step 5. replace value at element i with our number to be moved
    
    console.log(data);
}

moveLeft(arr);
    