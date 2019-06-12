/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = false;
  }
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};