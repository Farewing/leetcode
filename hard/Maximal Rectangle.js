/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (heights.length == 0) return 0;
  let s = [0],
    result = heights[0];
  for (let i = 1; i < heights.length; i++) {
    if (s.length == 0) {
      s[0] = i;
      continue;
    }

    while (s.length != 0 && heights[s[s.length - 1]] >= heights[i]) {
      let n = s.pop();
      let t = heights[n];
      let r;
      if (s.length == 0) r = t * i;
      else r = t * (i - 1 - s[s.length - 1]);
      result = r > result ? r : result;
    }

    s.push(i);
  }

  while (s.length != 0) {
    let n = s.pop();
    let t = heights[n];
    let r;
    if (s.length == 0) r = t * heights.length;
    else r = t * (heights.length - s[s.length - 1] - 1);
    result = r > result ? r : result;
  }
  return result;
};
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {};
