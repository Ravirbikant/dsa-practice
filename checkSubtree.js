/*Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isSubtree = (root, subRoot) => {
  if (!subRoot) return true;
  if (!root) return false;

  const matchTrees = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;

    if (a.val !== b.val) return false;
    if (!matchTrees(a.left, b.left)) return false;
    if (!matchTrees(a.right, b.right)) return false;

    return true;
  };

  const queue = [root];
  while (queue.length !== 0) {
    const current = queue.shift();
    if (current.val === subRoot.val) {
      if (matchTrees(current, subRoot)) return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

/* ---------- Test Cases ---------- */

// Subtree exists
// Root:        3
//             / \
//            4   5
//           / \
//          1   2
// SubRoot:     4
//             / \
//            1   2
const a = new Node(3);
const b = new Node(4);
const c = new Node(5);
const d = new Node(1);
const e = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

const sub1 = new Node(4);
sub1.left = new Node(1);
sub1.right = new Node(2);

console.log(isSubtree(a, sub1)); // true

// Subtree does not exist (structure mismatch)
const sub2 = new Node(4);
sub2.left = new Node(1);
sub2.right = new Node(3);

console.log(isSubtree(a, sub2)); // false

// SubRoot is entire tree
console.log(isSubtree(a, a)); // true

// // SubRoot is null
console.log(isSubtree(a, null)); // true

// // Root is null, SubRoot not null
console.log(isSubtree(null, sub1)); // false

// // Both null
console.log(isSubtree(null, null)); // true
