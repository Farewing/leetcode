/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  var binTree = null,
    res = [];

  for (let i = 0; i < nums.length; i++) {
    res[i] = 0;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    binTree = insertBinTree(binTree, nums[i], res, i);
  }

  return res;

  function insertBinTree(node, value, res, i) {
    if (node == null)
      node = {
        val: value,
        right: null,
        left: null,
        count: 0
      };
    else if (node.val >= value) {
      node.count++;
      node.left = insertBinTree(node.left, value, res, i);
    } else {
      res[i] += node.count + 1;
      node.right = insertBinTree(node.right, value, res, i);
    }
    return node;
  }
};
