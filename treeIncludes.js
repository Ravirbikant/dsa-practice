// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeIncludes = (root, target) => {
  if (!root) return false;

  const queue = [root];

  while (queue.length !== 0) {
    const current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

/* ---------- Test Cases ---------- */

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(treeIncludes(a, 4)); // true
console.log(treeIncludes(a, 5)); // false
console.log(treeIncludes(null, 1)); // false
