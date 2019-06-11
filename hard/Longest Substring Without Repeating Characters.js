var lengthOfLongestSubstring = function(s) {
  let arry = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!arry.includes(s[i])) {
      arry.push(s[i]);
    } else {
      var index = arry.indexOf(s[i]);
      arry.splice(0, index + 1);
      arry.push(s[i]);
    }
    count = arry.length > count ? arry.length : count;
  }
  return count;
};
