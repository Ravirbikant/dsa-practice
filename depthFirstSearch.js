// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// --- Write your function below ---
function depthFirstValues(root) {
  if (!root) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);

  return [root.val, ...leftValues, ...rightValues];
}

// --- Test cases ---
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstValues(a)); // Expected output: ['a', 'b', 'd', 'e', 'c', 'f']
// console.log(depthFirstValues(b)); // Expected output: ['b', 'd', 'e']
// console.log(depthFirstValues(null)); // Expected output: []
