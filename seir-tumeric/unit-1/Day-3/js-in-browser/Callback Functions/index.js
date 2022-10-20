setTimeout(
    ()=>{
        console.log('hi');
    },
    2000
);


setInterval(
    ()=>{
        console.log('hi');
    },
    2000
)


// forEach example
const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
iceCreams.forEach(
    (currentElement)=>{
        console.log(currentElement); //prints each element....vanilla, chocolate, strawberry, rocky toad
    }
)

const henchman = ()=>{
    console.log("I'm the henchman");
}
console.log(henchman);// prints [Function: henchman]




const henchman = ()=>{
    console.log("I'm the henchman");
}
const mobboss = (employee)=>{
    console.log(employee);
}
mobboss(henchman); // prints [Function: henchman]






const henchman = ()=>{
    console.log("Right-o boss");
}
const mobboss = (employee)=>{
    console.log("Go set a restaurant on fire");
    employee();
}
mobboss(henchman);//prints out Go set the restaraunt on fire 1st and then Right o boss




const thief = ()=>{
    console.log("I'm the thief");
}
const arsonist = ()=>{
    console.log("I'm the arsonist");
}
const mobboss = (employee)=>{
    console.log("Go do your specialty");
    employee();
}
mobboss(thief); // prints Go do your specialty and then im the theif
mobboss(arsonist); //prints Go do your specialty and then im the arsonist


const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
iceCreams.forEach((currentElement)=>{
    console.log(currentElement); // prints out each flavor of ice cream
});



const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
const updatedIceCreams = iceCreams.map((flavor)=>{
    return flavor + " Ice Cream";
});

console.log(updatedIceCreams);//print out each flavor + ice cream at the end