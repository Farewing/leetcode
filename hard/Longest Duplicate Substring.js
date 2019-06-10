/**
 * @param {string} S
 * @return {string}
 * 给出一个字符串 S， 考虑其所有重复子串（ S 的连续子串， 出现两次或多次， 可能会有重叠）。
 * 返回任何具有最长可能长度的重复子串。（ 如果 S 不含重复子串， 那么答案为 ""。）
 */
//超时
// var longestDupSubstring = function(S) {
//   let maxL = 0,
//     result = '';
//   for (let i = 0; i < S.length; i++) {
//     for (let j = 1 + maxL; j <= S.length - i; j++) {
//       let subS = S.substr(i, j);
//       // let oS = S.substr(i + 1);
//       if (S.lastIndexOf(subS) > i) {
//         if (maxL < subS.length) {
//           maxL = subS.length;
//           result = subS;
//         }
//       } else break;
//     }
//   }
//   return result;
// };

var longestDupSubstring = function(S) {
  let mid = parseInt(S.length / 2);
  let left = 0,
    right = S.length;

  while (left < right) {
    if (hasSubstr(S, mid) != '') left = mid;
    else right = mid - 1;
    mid = parseInt((left + right + 1) / 2);
  }

  return hasSubstr(S, left);

  function hasSubstr(S, num) {
    for (let i = 0; i < S.length - num; i++) {
      let subS = S.substr(i, num);
      if (S.lastIndexOf(subS) > i) return subS;
    }
    return '';
  }
};
