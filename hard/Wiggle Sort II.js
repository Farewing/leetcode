/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  var l = getMedian(nums);

  let i = 0,
    j = 0,
    k = nums.length - 1,
    t;
  while (j <= k) {
    if (nums[A(j)] > l) {
      t = nums[A(i)];
      nums[A(i)] = nums[A(j)];
      nums[A(j)] = t;
      i++;
      j++;
    } else if (nums[A(j)] < l) {
      t = nums[A(j)];
      nums[A(j)] = nums[A(k)];
      nums[A(k)] = t;
      k--;
    } else ++j;
  }
  return nums;

  function swap(a, b) {
    let t = a;
    a = b;
    b = t;
  }

  function A(n) {
    return (1 + 2 * n) % (nums.length | 1);
  }

  //获取中位数
  function getMedian() {
    let mid = parseInt((nums.length - 1) / 2);
    let m = partSort(0, nums.length - 1);

    while (m != mid) {
      if (mid < m) m = partSort(0, m - 1);
      else m = partSort(m + 1, nums.length - 1);
    }
    return nums[m]; //找到了
  }

  //分割数组
  function partSort(left, right) {
    let i = left;
    let j = right;
    let t = nums[left];
    var temp;

    while (i < j) {
      while (nums[j] >= t && i < j) j--;
      while (nums[i] <= t && i < j) i++;

      if (i < j) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
    nums[left] = nums[i];
    nums[i] = t;
    return i;
  }
};