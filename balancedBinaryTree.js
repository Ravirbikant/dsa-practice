/*Given a binary tree, return true if it is height-balanced and false otherwise.

A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isBalanced = (root) => {
  if (!root) return true;
  let check = true;

  const getHeight = (root) => {
    if (!root) return 0;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    const diff =
      leftHeight > rightHeight
        ? leftHeight - rightHeight
        : rightHeight - leftHeight;

    if (diff >= 2) check = false;

    return 1 + Math.max(leftHeight, rightHeight);
  };

  getHeight(root);

  return check;
};

/* ---------- Test Cases ---------- */

// Balanced tree
//   1
//  / \
// 2   3
const a = new Node(1);
a.left = new Node(2);
a.right = new Node(3);
console.log(isBalanced(a)); // true

// Unbalanced tree
// 1 -> 2 -> 3
const b = new Node(1);
b.left = new Node(2);
b.left.left = new Node(3);
console.log(isBalanced(b)); // false

// Single node
console.log(isBalanced(new Node(10))); // true

// Empty tree
console.log(isBalanced(null)); // true

// Edge case: imbalance deep in tree
//     1
//    /
//   2
//  /
// 3
//  \
//   4
const c = new Node(1);
c.left = new Node(2);
c.left.left = new Node(3);
c.left.left.right = new Node(4);
console.log(isBalanced(c)); // false
