
//Add two elements to get the target....in this example the target is 8
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.


let arr = [1,2,3,4,5,6,7]
let target = 8
var twoSum = function(nums, target){ //nums is placeholder
    for(let i=0; i<nums.length; i+=1){ //this writes everything in the array
        for(let j= i+1; j< nums.length; j+=1)
       // console.log('first grabbed item: ' + nums[i] + 'second item: ' + nums[j])
        if (target === nums[i] + nums[j]){
       console.log(nums[i], nums[j]) //compares every number
        return [i, j] //stops the loop once the answer is found
    }
}

}
twoSum(arr, target)




//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), for n > 1.
var fib = function(n){
    var collect = [0, 1]

    for (let i = 2; i<n; i +=1)

    collect.push(collect[i-1] + collect[i-2]);

console.log(collect)
}
console.log(fib(6))