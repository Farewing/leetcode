/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  var max = '',
    min = '';
  for (let i = 0; i < n; i++) {
    max += '9';
    min += '0';
  }
  max = parseInt(max);
  min = parseInt('1' + min.substr(1));

  for (let i = max; i > min; i--) {
    for (let j = max; j >= i; j--) {
      let p = i * j;
    }
  }
};
