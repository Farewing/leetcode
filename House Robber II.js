/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length < 2) return nums[0];
  let dp1 = [];
  let dp2 = [];
  dp1[0] = 0;
  dp1[1] = 0;
  dp2[0] = 0;
  dp2[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp1[i + 1] = Math.max(dp1[i], dp1[i - 1] + nums[i]);
  }
  for (let i = 1; i < nums.length - 1; i++) {
    dp2[i + 1] = Math.max(dp2[i], dp2[i - 1] + nums[i]);
  }
  return Math.max(dp1[nums.length], dp2[nums.length - 1]);
};