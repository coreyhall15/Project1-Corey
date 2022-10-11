const brokenRobot = {
    part1: "arm",
    part2: "lazer",
    part3: "wheels"
}

//const part1 = brokenRobot.part1
//const part2 = brokenRobot.part2
//const part3 = brokenRobot.part3

//THE 3 LINES ABOVE ARE REPRESENTED IN THE LINES BELOW
const{part1, part2, part3} = brokenRobot

console.log(part1, part2, part3)


//Example for arrays
const arr = [1,2,3]

const [one, two, three] = arr

console.log(one, two, three)