// Binary Tree Node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];

  const queue = [root];
  let ans = [];
  while (queue.length > 0) {
    const levelLength = queue.length;
    let arr = [];
    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift();
      arr.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    ans.push(arr.pop());
  }

  return ans;
}

/* ---------- Test Helper ---------- */
function testCase(name, root, expected) {
  const res = rightSideView(root);
  console.log(
    name,
    "=>",
    JSON.stringify(res),
    "| expected:",
    JSON.stringify(expected)
  );
}

/* Case: root = [1,2,3,4,5,6,7] */
let root7 = new TreeNode(1);
root7.left = new TreeNode(2);
root7.right = new TreeNode(3);
root7.left.left = new TreeNode(4);
root7.left.right = new TreeNode(5);
root7.right.left = new TreeNode(6);
root7.right.right = new TreeNode(7);

testCase("Case 7", root7, [1, 3, 7]);

/* Case: root = [1,2,3,4] */
let root6 = new TreeNode(1);
root6.left = new TreeNode(2);
root6.right = new TreeNode(3);
root6.left.left = new TreeNode(4);

testCase("Case 6", root6, [1, 3, 4]);
