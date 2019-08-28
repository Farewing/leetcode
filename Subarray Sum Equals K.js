/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
示例 1 :
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 */
var subarraySum = function(nums, k) {
  let j = 0,
    r = 0,
    sum = 0;
  while (j < nums.length) {
    let i = j;
    while (i < nums.length) {
      sum += nums[i];
      if (sum == k) r++;
      i++;
    }
    sum = 0;
    j++;
  }
  return r;
};
