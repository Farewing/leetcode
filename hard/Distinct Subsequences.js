/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let dp = [];
  for (let i = 0; i <= t.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= s.length; j++) {
      if (i == 0) dp[i][j] = 1;
      else if (j == 0 || i > j) dp[i][j] = 0;

      else {
        if (s[j - 1] != t[i - 1]) dp[i][j] = dp[i][j - 1];
        else
          dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
      }
    }
  }
  console.log(dp)
  return dp[t.length][s.length];
};