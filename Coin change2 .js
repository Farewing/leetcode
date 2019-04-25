/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let a = [];
  a[0] = 1;
  for (let k = 1; k <= amount; k++) {
    a[k] = 0;
  }
  for (let j = 0; j < coins.length; j++) {
    for (let i = coins[j]; i <= amount; i++) {
      if (i >= coins[j]) a[i] += a[i - coins[j]];
    }
  }
  console.log(a);
  return a[amount];
};
