//------------------------------
//Objects....objects use { } and arrays use [ ]. Objects use property
//A list of students would be an array and an actual student would be an object
//Objects contain keys and value. Key = const Corey; value = name age isTall
//------------------------------
const arr = [1,2,3,4,5]
const Corey = {
    name: "Corey",
    age: 42,
    isTall: true
}

console.log(Corey.name)
console.log(arr)

//[1,2,3,4,5] array....ordered list of things


//Robot....single object that is a robot

const key = "weapon"

const robot = {
    name: "BleepBlop",
    serial: 1,
    isEvil: false,
    ["gas tank"]:"full",
    [key]: "Lazers",




}

console.log(robot)
console.log(robot.name) // access prop via dot
console.log(robot["name"]) // access prop via dot
console.log(robot["gas tank"]) // access prop via []
console.log(robot.weapon)



// using objects to count strings. this counted how many times dog and cat was counted

function countStrings(arr){

    const obj = {}

    for (let word of arr){
        if(obj[word]){
            obj[word] += 1
        } else {
            obj[word] = 1
        }
    }

    return obj

}

console.log(countStrings(["dog", "dog", "cat"]))

// adding keys

const you = {}

you.name = "Alex Merced"
you.age = 37

console.log(you)


