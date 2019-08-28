/**
 * @param {number[]} nums
 * @return {number}
 * 最长连续序列 O(n)
 */
var longestConsecutive = function(nums) {
  if (nums.length == 0) return 0;
  let s = new Map();
  let r = 0;
  for (let i of nums) {
    s.set(i, 1);
  }

  for (var key of s.keys()) {
    if (!s.has(key - 1)) {
      let l = 1,
        currentNum = key;
      while (s.has(currentNum + 1)) {
        l++;
        currentNum++;
      }

      r = Math.max(r, l);
    }
  }
  return r;
};
