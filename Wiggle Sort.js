/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  let a = [];
  let k = 0;
  let current = 0;
  a[0] = 1;
  if (nums.length < 2) return nums.length;
  for (let i = 1; i < nums.length; i++) {
    // a.push(nums[i + 1] > nums[i] ? 1 : -1);
    if (nums[i] > nums[i - 1]) {
      current = 1;
    } else if (nums[i] < nums[i - 1]) {
      current = -1;
    }
    a[i] = k === current ? a[i - 1] : a[i - 1] + 1;
    k = current;
  }
  return a[nums.length - 1];
};
