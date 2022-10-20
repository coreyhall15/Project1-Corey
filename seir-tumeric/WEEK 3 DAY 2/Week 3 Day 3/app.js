//assign the div to a variable with jQuery
const $div = $("div")
console.log($div)

//change the text node.InnerText = " "
$div.text("This is some new text") //change the text
console.log($div.text()) // retrieve the existing text

// change the html node.innerHTML = ""
$div.html("<h1>I changed the inner html</h1>")
console.log($div.html())

// change a style property node.style.property = ""
$div.css("color", "red") // changes it
console.log($div.css("color")) // retrieves it

// add a class node.classList.add("class") the class was added into style.css
$div.addClass("cheese") //would add class
$div.removeClass("cheese") // would remove class

// add an event and use toggleClass
// node.addEventListener("event", () => {})
const $button = $("button")
$button.on("click", () => {
    $div.toggleClass("cheese")
})

// create an img and append to div
// document.createElement("img")
// node.setAttribute("src", "https://")
const $img = $("<img>")
$img.attr("src", "https://i.ytimg.com/vi/MjEaniGTrx0/maxresdefault.jpg")
console.log($img.attr("src"))
$div.append($img)

// create an li with the text of "1" and append it to the ul
const $li = $("<li>") //use < > to create a new li
$li.text("1")
const $ul = $("ul")
$ul.append($li)

// create an li with the text of "5" and append it the the ul
const $li5 = $("<li>").text("5")
$ul.append($li5)

// create an li with the text of "3" and append it to the ul so that it is after 1 and before 5
const $li3 = $("<li>").text("3") //the .before places 3 before 5
$li5.before($li3)

// create an li with the text of "2" and append it to the ul so that it is after 1 and before 3
$li.after($("<li>").text("2")) // the .after places 2 after 1

// create an li with the text of "4" and append it to the ul so that it is after 3 and before 5
$li3.after($("<li>").text("4"))


//how to accomplish this in an array
for (let num of ["1", "2", "3", "4", "5", "6"]){
    $("ul").append($("<li>").text(num))
}