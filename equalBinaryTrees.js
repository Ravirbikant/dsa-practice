/*Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.

Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isSameTree = (p, q) => {
  if (!p && !q) return true;

  if (!p || !q) return false;
  let ans = true;

  if (p.val !== q.val) ans = false;

  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  if (!left || !right) return false;
  return ans;
};

/* ---------- Test Cases ---------- */

// Same trees
//   1        1
//  / \      / \
// 2   3    2   3
const a1 = new Node(1);
a1.left = new Node(2);
a1.right = new Node(3);

const b1 = new Node(1);
b1.left = new Node(2);
b1.right = new Node(3);

console.log(isSameTree(a1, b1)); // true

// Different values
const a2 = new Node(1);
a2.left = new Node(2);

const b2 = new Node(1);
b2.left = new Node(3);

console.log(isSameTree(a2, b2)); // false

// Different structure
const a3 = new Node(1);
a3.left = new Node(2);

const b3 = new Node(1);
b3.right = new Node(2);

console.log(isSameTree(a3, b3)); // false

// Both null
console.log(isSameTree(null, null)); // true

// One null, one not
console.log(isSameTree(new Node(1), null)); // false
