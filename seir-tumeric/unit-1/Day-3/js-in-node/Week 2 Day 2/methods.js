///===============================
// METHOD (functions inside of objects)
//================================

const obj = {
    prop: "Hello WOrld",
    // method #1
    myFunc: () => {
        console.log(this)//don't use "this" when using the arrow method. It will give an empty srting
        console.log("can I use this: " + this )
    },
    // method #2....easiest way to wrtie a function(****** please memorize *****)
    myFunc2: function(){
        console.log(this)
        console.log("can I use this: " + this )
    },
    // method #3
    myFunc3(){
        console.log(this)
        console.log("can I use this: " + this.prop )
    },
}

obj.myFunc()
obj.myFunc2()
obj.myFunc3()


// create an object that represents you, give it three properties that represent you, and add one method that console logs you typical greeting, then console log the object and invoke the method

const alex = {
    name: "Alex Merced",
    age: 37,
    hobbies: ["guitar", "coding", "podcasting"],
    greeting: function(){
        console.log("hey")
    }
}

console.log(alex)
alex.greeting()


//Creating objects and loops

// array to hold are robot objects
const robots = []

// create 100 robots
for(let count = 0; count < 100; count += 1){
    robots.push({
        name: "Evil Robot " + count,
        serial: count,
        attack: function(){
            console.log("attack")
        }
    })
}

console.log(robots)

for (let robot of robots){
    if(robot.serial % 2 === 0){
        console.log(robot.name)
        robot.attack()
    }
}