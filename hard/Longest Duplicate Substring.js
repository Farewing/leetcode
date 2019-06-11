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
  let R = 26,
    MOD = 1e9 + 7;

  let left = 0,
    right = S.length - 1;

  while (left < right) {
    let mid = Math.ceil((left + right) / 2);
    if (rabinKarp(S, mid) != '') left = mid;
    else right = mid - 1;
  }

  return rabinKarp(S, left);

  function hasSubstr(S, num) {
    for (let i = 0; i < S.length - num; i++) {
      let subS = S.substr(i, num);
      if (S.lastIndexOf(subS) > i) return subS;
    }
    return '';
  }

  function rabinKarp(str, len) {
    let RM = 1;
    // 等价于RM=Math.pow(R,M-1) % MOD
    // 由于JS精度问题拆解计算
    for (let i = 1; i < len; i++) {
      RM = (RM * R) % MOD;
    }
    let map = new Map();
    let num = 0;
    // 计算前len个字符串的散列值
    for (let i = 0; i < len; i++) {
      let code = str.charCodeAt(i) - 97;
      num = (num * R + code) % MOD;
    }
    map.set(num, 0);
    // 后续计算散列值
    for (let i = 0; i < str.length - len; i++) {
      let preCode = str.charCodeAt(i) - 97,
        curCode = str.charCodeAt(i + len) - 97;
      num = (num + MOD - ((preCode * RM) % MOD)) % MOD;
      num = (num * R + curCode) % MOD;
      if (map.has(num)) {
        let sub = str.substring(i + 1, i + 1 + len);
        let preId = map.get(num),
          preSub = str.substring(preId, preId + len);
        if (sub === preSub) return sub;
      }
      map.set(num, i + 1);
    }
    return '';
  }
};
