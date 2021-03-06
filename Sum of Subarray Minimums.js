/**
 * @param {number[]} A
 * @return {number}
 * 给定一个整数数组 A，找到 min(B) 的总和，其中 B 的范围为 A 的每个（连续）子数组。
 * 由于答案可能很大，因此返回答案模 10^9 + 7
 */
var sumSubarrayMins = function (A) {
  let i = 0, j = 0, r = 0;
  const Max = Math.pow(10, 9) + 7;
  let min;
  if (A.length === 0) return 0;
  while (i < A.length) {
    min = Max;
    while (j < A.length - i) {
      min = Math.min(min, A[i + j]);
      r += min;
      j++;
    }
    i++;
    j = 0;
  }
  return r % Max;
};

var sumSubarrayMins = function (A) {
  let stack = [];
  for (let i = 0; i < A.length; i++) {
    const element = array[i];

  }
}