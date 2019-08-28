/**
 * @param {string} s
 * @return {string[]}
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 */
var restoreIpAddresses = function(s) {
  let r = [],
    t = [];
  backtrack(s, r, -1, 3, t);
  return r;
};

function backtrack(s, r, lastDot, dotCount, t) {
  let maxIndex = Math.min(s.length - 1, lastDot + 4);
  for (let i = lastDot + 1; i < maxIndex; i++) {
    let segment = s.substring(lastDot + 1, i + 1);
    if (isValid(segment)) {
      t.push(segment);
      if (dotCount == 1) updateResult(s, r, i, t);
      else backtrack(s, r, i, dotCount - 1, t);
      t.pop();
    }
  }
}

function isValid(s) {
  let n = s.length;
  if (n > 3 || n < 1) return false;
  if (s[0] == '0' && n > 1) return false;
  if (parseInt(s) > 255) return false;
  return true;
}

function updateResult(s, r, i, t) {
  let segment = s.substring(i + 1);
  if (isValid(segment)) {
    t.push(segment);
    r.push(t.join('.'));
    t.pop();
  }
}
