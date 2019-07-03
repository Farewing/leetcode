/**
 * @param {number[]} A
 * @return {number}
 * 给定一个数组 A， 将其划分为两个不相交（ 没有公共元素） 的连续子数组 left 和 right， 使得：

 left 中的每个元素都小于或等于 right 中的每个元素。
 left 和 right 都是非空的。
 left 要尽可能小。
 在完成这样的分组后返回 left 的长度。 可以保证存在这样的划分方法。
 */
var partitionDisjoint = function(A) {
  let a = [...A].sort(function(a, b) {
    return a - b;
  });
  let index = -1,
    s = 0;
  count = 0;
  if (a[0] == a[A.length - 1]) return 1;
  for (let i = 0; i < A.length; i++) {
    let t = a.indexOf(A[i]);
    if (t > index) {
      index = t;
      count++;
      count += s;
      s = 0;
    } else if (t != index) {
      count++;
    } else s++;

    console.log(i, index, s, count, A[i]);

    if (index == count - 1) return i + 1;
  }
  return A.length;
};

var partitionDisjoint = function(A) {
  let max = A[0],
    index = 0,
    sub = A[0];
  for (let i = 0; i < A.length; i++) {
    max = A[i] > max ? A[i] : max;
    if (A[i] < sub) {
      sub = max;
      index = i;
    }
  }
  return index + 1;
};
