/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);

  let l = 0,
    r = nums[nums.length - 1] - nums[0];

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let count = 0,
      j = 0;
    for (let i = 1; i < nums.length; i++) {
      while (nums[i] - nums[j] > m) j++;
      count += i - j;
    }
    if (count < k) l = m + 1;
    else r = m;
  }
  return l;
};

// 排序数组nums，差值在0和nums[nums.length - 1] - nums[0]之间
// 二分查找差值 m， 满足条件 有k-1个差值小于m
// 计算个数的算法为 极限边界考虑
