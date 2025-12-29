// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;

  const tellHeight = (root) => {
    if (!root) return 0;
    else {
      const leftHeight = tellHeight(root.left);
      const rightHeight = tellHeight(root.right);

      if (maxDiameter < leftHeight + rightHeight)
        maxDiameter = leftHeight + rightHeight;

      return 1 + Math.max(tellHeight(root.left), tellHeight(root.right));
    }
  };

  tellHeight(root);

  return maxDiameter;
};

const a = new Node(3);
const b = new Node(1);
const c = new Node(2);

a.left = b;
b.right = c;

console.log(diameterOfBinaryTree(a)); // 2
