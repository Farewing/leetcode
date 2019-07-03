/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//分治
var longestSubstring = function(s, k) {
  function find(left, right) {
    if (left > right) return 0;
    let t = new Map();
    for (let i = left; i <= right; i++) {
      if (!t.has(s[i])) t.set(s[i], [i]);
      else t.get(s[i]).push(i);
    }

    for (let item of t.values()) {
      if (item.length < k) {
        let pos = item[0];
        return Math.max(find(left, pos - 1), find(pos + 1, right));
      }
    }
    return right - left + 1;
  }

  return find(0, s.length - 1);
};

var longestSubstring = function(s, k) {
  function find(left, right) {
    if (left > right) return 0;
    let t = {};
    for (let i = left; i <= right; i++) {
      if (!t.hasOwnProperty(s[i])) t[s[i]] = [i];
      else t[s[i]].push(i);
    }

    for (let item in t) {
      if (t[item].length < k) {
        let pos = t[item][0];
        return Math.max(find(left, pos - 1), find(pos + 1, right));
      }
    }
    return right - left + 1;
  }

  return find(0, s.length - 1);
};
