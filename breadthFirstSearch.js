// index.js

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// --- Write your function below ---
function breadthFirstValues(root) {
  if (!root) return [];
  let queue = [root];

  let ans = [];

  while (queue.length > 0) {
    const temp = queue.shift();
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
    ans.push(temp.val);
  }

  return ans;
}

// --- Test cases ---
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(breadthFirstValues(a));
