/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows == 1) return s;
  let flag = 1;
  index = 1;
  let a = [];
  for (let i = 0; i < s.length; i++) a.push('');

  for (let i = 0; i < s.length; i++) {
    a[index - 1] += s[i];
    if (index == numRows) flag = -1;
    if (index == 1) flag = 1;
    index += flag;
  }
  let result = '';
  for (let i = 0; i < numRows; i++) {
    result += a[i];
  }
  return result;
};
