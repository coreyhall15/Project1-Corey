
console.log("print text to terminal")

//--------------------------
//Functions
//---------------------------

//Defining a function(3 ways)
function helloWorld(){ 
    console.log("Hello World")
}

helloWorld()
helloWorld()
helloWorld()

// Function Expression (not hoisted) //can't use it before its declared
const helloWorld2 = function () {
    console.log("Hello World 2");
  };
  
  helloWorld2();
  helloWorld2();
  helloWorld2();

// Arrow Function (not hoisted)
// () => {}

const helloWorld3 = () => {console.log("Hello WOrld 3")}

helloWorld3()
helloWorld3()
helloWorld3()
