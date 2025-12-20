// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  if (!root.left && !root.right) return root.val;
  let left = root.left ? maxPathSum(root.left) : -Infinity;
  let right = root.right ? maxPathSum(root.right) : -Infinity;

  return root.val + Math.max(left, right);
};

/* ---------- Test Cases ---------- */

// Tree:   5
//        / \
//       11  3
//      /  \
//     4    2
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(maxPathSum(a)); // 20

// Single node
console.log(maxPathSum(new Node(7))); // 7

// Left-skewed tree
// 1 -> 2 -> 3
const l1 = new Node(1);
l1.left = new Node(2);
l1.left.left = new Node(3);
console.log(maxPathSum(l1)); // 6

// Right-skewed tree
// 1 -> 2 -> 10
const r1 = new Node(1);
r1.right = new Node(2);
r1.right.right = new Node(10);
console.log(maxPathSum(r1)); // 13

// Negative values
//   -5
//   / \
// -2  -3
const n1 = new Node(-5);
n1.left = new Node(-2);
n1.right = new Node(-3);
console.log(maxPathSum(n1)); // -7
