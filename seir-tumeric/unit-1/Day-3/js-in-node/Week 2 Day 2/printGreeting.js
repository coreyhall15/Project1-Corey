//printGreeting
//Write a function called printGreeting with a parameter name
//that returns a greeting with the argument interpolated into the greeting.

//console.log(printGreeting)
//=> Hello there, Slimer!


const printGreeting = (name) => {
    return `Hello there, ${name}`;

}
console.log(printGreeting('Corey'))




//reverseWordOrder
const reverseWordOrder = (str) => { 
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWordOrder("Ishmael me Call"));



