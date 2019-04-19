/**
 * @param {string} S
 * @return {string}
 */
var makeLargestSpecial = function(S) {
  let t = [];
  let count = 0;
  let k = 0;
  // if (S.length == 0) return '';

  for (let i = 0; i < S.length; i++) {
    count += S[i] == '1' ? 1 : -1;
    if (count == 0) {
      t.push('1' + makeLargestSpecial(S.substr(k + 1, i - k - 1)) + '0');
      k = i + 1;
    }
  }
  t.sort(function(a, b) {
    let i = a.length;
    let j = b.length;
    let k = i < j ? i : j;
    for (let n = 0; n < k; n++) {
      if (a[n] > b[n]) return -1;

      if (a[n] < b[n]) return 1;
    }

    if (i >= j) return -1;
    return 1;
  });
  console.log(t);
  return t.join('');
};
