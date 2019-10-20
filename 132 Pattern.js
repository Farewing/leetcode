/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  if (nums.length < 3) return false;
  let num = nums.reverse();
  let stack = [];
  let last = -10000000000;
  for (let i = 0; i < num.length; i++) {
    console.log(last)
    if (last > num[i]) return true;
    while (stack.length > 0 && num[i] > num[stack[stack.length - 1]]) {
      last = num[stack.pop()];
    }
    stack.push(i);
  }
  return false;
};