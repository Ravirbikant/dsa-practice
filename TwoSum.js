/*Given an array of integers numbers, 
write a function that returns the indices of two integers within the 
numbers array that sum up to a target integer. 
The smaller index should appear first.*/

function pairSum(numbers, target) {
    let seen = new Map();

    for (let i=0; i<numbers.length;i++){
        let required = target - numbers[i];
        if(seen.has(required)){
            return i > seen.get(required) ? [seen.get(required), i] :  [i, seen.get(required)];
        }
        seen.set(numbers[i], i);
    }
}

let numbers = [0,7,1,9]
let target = 8

console.log(pairSum(numbers, target))