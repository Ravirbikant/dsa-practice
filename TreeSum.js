// index.js

// Binary Tree Node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  if (!root) return 0;
  let sum = 0;

  sum += root.val;
  sum += treeSum(root.left);
  sum += treeSum(root.right);
  return sum;
};

/* ---------- Test Cases ---------- */

// Tree:   3
//        / \
//       11  4
//      /  \
//     4    2
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
console.log(treeSum(a)); // 24

console.log(treeSum(null)); // 0

const single = new Node(7);
console.log(treeSum(single)); // 7
