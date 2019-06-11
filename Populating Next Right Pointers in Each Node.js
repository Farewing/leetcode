/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  if (root.next) root.right.next = root.next.left;
  connect(root.left);
  connect(root.right);
  return root;
};
