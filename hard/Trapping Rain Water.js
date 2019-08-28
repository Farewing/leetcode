/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height <= 2) return 0;

  let res = 0,
    stack = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop();
      if (stack.length == 0) break;
      let d = i - stack[stack.length - 1] - 1;
      let h =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      res += d * h;
    }
    stack.push(i);
  }

  return res;
};
