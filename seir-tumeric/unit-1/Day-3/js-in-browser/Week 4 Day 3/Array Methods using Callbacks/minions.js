//forEach
//First, he wants to test out forEachto check who's present. So as he goes down the array of minions, they should console.log that they're here.

const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]


  const forLoopMinions = arr=> {
    for(let i = 0; i<arr.length; i+=1)
    console.log('here' , arr[i]);
}



forLoopMinions(minions);


//They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the mapmethod.

//Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions



const capitalizedMinions = minions.map(element => {
    return element.toUpperCase()
    

})


console.log(capitalizedMinions)




//Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the filter method to filter out the sneaky minion who didn't get capitalized.

//Use filterto filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

const actuallyCapitalizedMinions = capitalizedMinions.filter((element, index) => {
    return !element.upper
})

console.log(actuallyCapitalizedMinions)


//Use every again, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

const actuallyCapitalizedMinionsarray = actuallyCapitalizedMinions.every((element, index) => {
       return element.capitalized;

})
console.log(actuallyCapitalizedMinionsarray)