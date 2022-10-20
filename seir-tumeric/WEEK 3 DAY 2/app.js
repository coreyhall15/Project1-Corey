// get the button in a variable
const firstButton = document.querySelector(".click-events button")
console.log(firstButton)
console.dir(firstButton)

// add a click event - method #1
//firstButton.onclick = function(){
  //  alert("This Works")
//}

//add a click event - method 2

function handleClick(){
    alert("This Works")
}

firstButton.addEventListener("click", handleClick)

//store blocks in variables
const black = document.querySelector(".bubble")
const pink = document.querySelector(".bubble div")
console.log(black)
console.log(pink)

//add event
black.addEventListener("click", function(){
    console.log("black")
})

//stopping bubbling
pink.addEventListener("click", function(event){
    event.stopPropagation() // prevents bubbling
    console.log("pink")
    console.dir(pink)
})

// Keyboard Events
window.addEventListener("keypress", function(event){
    console.log(event)
})

// Keyboard Events
window.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "g"){
        alert("You did the thing")
    }
    console.log(event)
})

// Handling Form Submit events
const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
console.log(form)
console.log(input)

form.addEventListener("submit", function(event){
    event.preventDefault()// <-- prevent refresh
    console.log(input.value)
})