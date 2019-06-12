/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * 示例 1:
   输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 输出: true

 示例 2:
   输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 输出: false
 */
var isInterleave = function (s1, s2, s3) {
  let n1 = s1.length,
    n2 = s2.length,
    n3 = s3.length;
  if (n1 + n2 != n3) return false;
  let dp = [];

  for (let i = 0; i <= n1; i++) {
    dp[i] = [];
    for (let j = 0; j <= n2; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = true;
      } else if (i == 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] == s3[i + j - 1];
      } else if (j == 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] == s3[i + j - 1];
      } else {
        dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
      }
    }
  }

  return dp[n1][n2];
};