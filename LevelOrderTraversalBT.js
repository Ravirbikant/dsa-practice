class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) return [];
  const ansArray = [];

  const queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let arr = [];
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      arr.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    ansArray.push(arr);
  }

  return ansArray;
}

/* ---------- Test Helper ---------- */
function testCase(name, root, expected) {
  const res = levelOrder(root);
  console.log(
    name,
    "=>",
    JSON.stringify(res),
    "| expected:",
    JSON.stringify(expected)
  );
}

/* Case 1: Complete binary tree */
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

testCase("Case 1", root1, [[1], [2, 3], [4, 5, 6, 7]]);

// /* Case 2: Single node */
// let root2 = new TreeNode(1);
// testCase("Case 2", root2, [[1]]);

// /* Case 3: Empty tree */
// testCase("Case 3", null, []);

// /* Case 4: Left skewed */
// let root3 = new TreeNode(1);
// root3.left = new TreeNode(2);
// root3.left.left = new TreeNode(3);

// testCase("Case 4", root3, [[1], [2], [3]]);

// /* Case 5: Right skewed */
// let root4 = new TreeNode(1);
// root4.right = new TreeNode(2);
// root4.right.right = new TreeNode(3);

// testCase("Case 5", root4, [[1], [2], [3]]);
