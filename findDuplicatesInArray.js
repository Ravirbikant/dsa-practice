function findDuplicates(numbers) {
  const seenSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (seenSet.has(numbers[i])) return true;
    else seenSet.add(numbers[i]);
  }

  return false;
}

const numbers = [10, 7, 0, 0];

const ans = findDuplicates(numbers);

console.log(ans);
