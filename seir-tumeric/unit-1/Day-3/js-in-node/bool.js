//------------------------
//Boolean Operators
//------------------------

const a = 5
const b = 8

//Equality
console.log(a === b) // strict equality...always use this one
console.log(a == b) // loose equality

console.log(a === "5") // false
console.log(a == "5") // true

// Inequality

console.log(a !== b) // strict equality...always use this one
console.log(a != b) // loose equality

console.log(a !== "5") // false
console.log(a != "5") // true

//Greater or less than
console.log(a<b)
console.log(a <= b)
console.log(a > b)
console.log(a >= b)

//Compound Operations
console.log(a < b && a > b) //false...both questions have to be true in order for this to be true
console.log(a < b || a > b) //true.....one or the other has to be true in order for this to be true

const c = a < b && a > b
console.log(c)