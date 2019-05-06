/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let n = [],
    m = {};
  for (let i = 0; i < nums.length; i++) {
    m[i] = 0;
    for (let j = 0; j < nums[i].length; j++) {
      n.push({ value: nums[i][j], key: i, index: j });
    }
  }
  n.sort(function(a, b) {
    return a.value - b.value;
  });

  let count = 0,
    l = 0,
    diff = 10000000;
  for (let r = 0; r < n.length; r++) {
    if (m[n[r].key] == 0) count++;
    m[n[r].key]++;
    while (l <= r && count == nums.length) {
      if (n[r].value - n[l].value < diff) {
        diff = n[r].value - n[l].value;
        res = [n[l].value, n[r].value];
      }
      if (--m[n[l].key] == 0) count--;
      l++;
    }
  }
  return res;
};
