/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let i = 0,
    a = Math.pow(2, 53) - 1,
    b = Math.pow(2, 53) - 1;
  while (i < nums.length) {
    if (nums[i] <= a) a = nums[i];
    else if (nums[i] <= b) {
      b = nums[i];
    } else return true;
    i++;
  }
  return false;
};
