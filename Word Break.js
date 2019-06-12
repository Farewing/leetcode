/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = [],
    m = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = {
      result: false,
      parent: []
    };
    m[i] = [];
  }
  dp[0] = { result: true };

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j].result && wordDict.includes(s.substr(j, i - j))) {
        dp[i].result = true;
        dp[i].parent.push(j);
        // break;
      }
    }
  }

  if (!dp[s.length].result) return [];

  for (let i = 1; i <= s.length; i++) {
    if (!dp[i].result) continue;
    for (let ele of dp[i].parent) {
      if (m[ele].length == 0) m[i].push(s.substr(ele, i - ele));
      else {
        for (let e of m[ele]) {
          m[i].push(e + ' ' + s.substr(ele, i - ele) + '');
        }
      }
    }
  }
  console.log(m);
  return m[s.length];
};
