// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeMinValue = (root) => {
  let min = root.val;

  let queue = [root];
  while (queue.length !== 0) {
    let current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    min = current.val < min ? current.val : min;
  }

  return min;
};

/* ---------- Test Cases ---------- */

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(-2);
const e = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(treeMinValue(a)); // -2
