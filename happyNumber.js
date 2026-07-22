/* Leetcode 202 : Happy Number : 2 Pointer method */

var isHappy = function(n) {
    let num = n;
    const getSum = (num) => {
        let sum = 0;
        while (num > 0) {
        let last = num % 10;
        sum += last * last;
        num = Math.floor(num/10); 
    }
    
        return sum;
}

    let slow = n;
    let fast = getSum(n);
    while(fast !== 1 && fast !==slow){
        slow = getSum(slow);
        fast = getSum(getSum(fast))
        count++;
    }
    return fast === 1;
};

console.log(isHappy(4))