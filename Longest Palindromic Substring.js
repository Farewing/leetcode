var longestPalindrome = function(s) {
  if (s.length <= 1) return s;

  var t = s
    .split('')
    .reverse()
    .join('');

  if (t == s) return s;

  s = s.split('').join('#');
  s = '$#' + s + '#$';

  let p = [];
  let mx = 0;
  let id = 1;
  let result = 0;
  let max = 0,
    maxIndex;
  for (let i = 0; i < s.length; i++) p.push(0);

  for (let i = 1; i < s.length - 1; i++) {
    if (i < mx) p[i] = mx - i < p[2 * id - i] ? mx - i : p[2 * id - i];
    else p[i] = 1;
    while (s[i - p[i]] == s[i + p[i]]) p[i]++;

    if (p[i] + i > mx) {
      mx = p[i] + i;
      id = i;
    }
    if (p[i] > max) {
      max = p[i];
      maxIndex = i;
    }
  }
  console.log(s, max, maxIndex, p);

  return s.substr(maxIndex - max + 1, 2 * max - 1).replace(/[$#]/g, '');
};
