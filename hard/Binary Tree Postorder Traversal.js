/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let r = [root],
    output = [];

  while (r.length > 0) {
    let node = r.pop();
    output.unshift(node.val);

    if (node.left) r.push(node.left);
    if (node.right) r.push(node.right);
  }
  return output;
};

// function getNode(node, r) {
//   if (node) {
//     getNode(node.left, r);
//     getNode(node.right, r);
//     r.push(node.val);
//   }
// }

//根据一棵树的中序遍历与后序遍历构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  function makeNode(il, ir, pl, pr) {
    if (il > ir || pl > pr) return null;

    let root = new TreeNode(postorder[pr]);

    let k = inorder.indexOf(postorder[pr]);

    root.left = makeNode(il, k - 1, pl, pl + k - il - 1);
    root.right = makeNode(k + 1, ir, pl + k - il, pr - 1);

    return root;
  }

  return makeNode(0, inorder.length - 1, 0, postorder.length - 1);
};
