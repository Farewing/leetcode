/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (coins.length < 1) return -1;
  let sum = [];
  sum[0] = 0;
  const MAX = Math.pow(2, 53);
  for (let i = 1; i <= amount; i++) {
    sum[i] = MAX;
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j] && sum[i - coins[j]] != -1) {
        sum[i] =
          sum[i - coins[j]] + 1 < sum[i] ? sum[i - coins[j]] + 1 : sum[i];
      }
    }
    if (sum[i] == MAX) sum[i] = -1;
  }
  console.log(sum);
  return sum[amount];
};
