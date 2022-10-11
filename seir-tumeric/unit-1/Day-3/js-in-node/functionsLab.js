function printGreeting (name){
    return `Hello there, ${name}!`
}

console.log(printGreeting("Slimer"))

//reverseOrder
function reverseWordOrder (word){
    var array = word.split(" ")
    var reverse = array.sort()
    var word = reverse.join(' ')
    return word
}
console.log(reverseWordOrder("Ishmal me Call"))
console.log(reverseWordOrder("I use Lancome on my comb"))

//Calculate



//printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);

const printConsecutives = ([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]); 
const countPairs = (arr = []) => {
    let count = 1
    for (var i = 0; i <arr.length; i + 2) 
        if (arr[i] - 1 === arr[i +1] || arr[i] + count++);
}
return count

console.log(countPairs(arr))
//letterReverse

function letterReverse(sentence)
let flipped = ''
let splits = sentence.split('')
for (let word of splits){
    const flipword = reverseWordOrder(word)
    flipped += flipword
    flipped += ' '
}
return flipped
console.log 
