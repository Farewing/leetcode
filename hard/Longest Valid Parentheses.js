/**
 * @param {string} s
 * @return {number}
 * dp 方法:
   我们用 dp[i] 表示以 i 结尾的最长有效括号；

 当s[i] 为(, dp[i] 必然等于0, 因为不可能组成有效的括号;

   那么s[i] 为)

 2.1 当 s[i - 1] 为(，那么 dp[i] = dp[i - 2] + 2；

2.2 当 s[i - 1] 为) 并且 s[i - dp[i - 1] - 1] 为(，那么 dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]；

     时间复杂度： O(n) O(n)
 */
var longestValidParentheses = function (s) {
  let dp = [],
    count = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i] = 0
  }

  for (let i = 1; i < s.length; i++) {
    if (s[i] == ')') {
      if (s[i - 1] == '(') dp[i] = (dp[i - 2] || 0) + 2
      else if (s[i - 1] == ')' && i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] == '(')
        dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] || 0);
      if (dp[i] > count) count = dp[i]
    }
  }
  return count;

};