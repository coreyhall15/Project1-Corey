console.log("External File")

// assign a DOM node to a variable
const p = document.querySelector("p")
console.log(p)

// edit the text of the node
p.innerText = "I am the new text"

// select a node based on a a class
//CSS Selector : .green
const gh1 = document.querySelector(".green")
console.log(gh1)

// setting styles directly
gh1.style.color = "green"
gh1.style.backgroundColor = "pink"


// select a node based on its id
//CSS Selector: #red
const rh1 = document.querySelector("#red")
console.log(rh1)

//setting the classes on a node.....changed Another h1 blue
rh1.classList.add("blue")

// create an image and set it source attribute
// create an img and set its source attribute
const img = document.createElement("img")
img.setAttribute("src", "https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg")//adds photo to page
p.append(img)

console.log(img)

//select all the <li> using querySelectorAll...will give you back an array
const lis = document.querySelectorAll("li")
console.log(lis)

for (let li of lis){
    li.classList.add("pink")
}

// looping over items in an array to create notes....Added the chipmunk names to the bottom of the list. You are declaring each chipmunk in the for loop with const chipmunk
const chipmunks = ["Alvin", "Theodore", "Simon"]

const ul = document.querySelector("ul")

for (const chipmunk of chipmunks){
    const newLi = document.createElement("li")
    newLi.innerText = chipmunk
    ul.append(newLi)
}

