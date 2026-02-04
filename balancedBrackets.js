function isBalancedBrackets(str) {
  if (str === "") return true;
  if (str.length % 2 !== 0) return false;

  const OPENING_BRACKETS = ["(", "{", "["];
  const CLOSING_BRACKETS = [")", "}", "]"];

  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  if (CLOSING_BRACKETS.includes(str[0])) return false;

  const bracketsStack = [];
  for (let s of str) {
    if (OPENING_BRACKETS.includes(s)) {
      bracketsStack.push(s);
    } else {
      const openBracket = bracketsStack.pop();
      if (matchingBrackets[s] !== openBracket) return false;
    }
  }

  return true;
}

const str = "([)]";

const ans = isBalancedBrackets(str);
console.log(ans);
