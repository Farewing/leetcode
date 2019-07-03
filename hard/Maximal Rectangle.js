/**
 * @param {number[]} heights
 * @return {number}
 */
let largestRectangleArea = function(heights) {
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
let maximalRectangle = function(matrix) {
  if (matrix.length == 0) return 0;
  let r = 0,
    l = [];
  for (let j = 0; j < matrix[0].length; j++) {
    l[j] = [];
  }
  for (let i = 0; i < matrix.length; i++) {
    let m = 1;
    for (let j = 0; j < matrix[i].length; j++) {
      m = m * matrix[i][j];
      l[j].push(m);
      m++;
    }
  }
  for (let i = 0; i < l.length; i++) {
    let t = largestRectangleArea(l[i]);
    r = t > r ? t : r;
  }

  return r;
};
