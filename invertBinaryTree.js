// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const invertTree = (root) => {
  if (!root) return null;

  root.left = invertTree(root.left);
  root.right = invertTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};

/* ---------- Test Cases ---------- */

// Tree:   4
//        / \
//       2   7
//      / \ / \
//     1  3 6  9
const a = new Node(4);
const b = new Node(2);
const c = new Node(7);
const d = new Node(1);
const e = new Node(3);
const f = new Node(6);
const g = new Node(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

invertTree(a);
console.log(a.left.val); // 7
console.log(a.right.val); // 2
