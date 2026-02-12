function maxProductSubArray(numbers) {
  let result = numbers[0];
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    const currentMax = max;
    const currentMin = min;
    max = Math.max(current, current * currentMax, current * currentMin);
    min = Math.min(current, current * currentMin, current * currentMax);

    result = Math.max(result, max);
  }

  return result;
}
const numbers = [2, 0, 3, 4];

const ans = maxProductSubArray(numbers);
console.log(ans);
