/*Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.

The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q as descendants. The ancestor is allowed to be a descendant of itself.*/

function lowestCommonAncestor(root, p, q) {
  if (p.val === root.val || q.val === root.val) return root;
  if (
    (p.val < root.val && root.val < q.val) ||
    (p.val > root.val && root.val > q.val)
  )
    return root;
  return p.val < root.val && q.val < root.val
    ? this.lowestCommonAncestor(root.left, p, q)
    : this.lowestCommonAncestor(root.right, p, q);
    }
}

