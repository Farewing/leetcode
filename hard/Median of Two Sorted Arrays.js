var findMedianSortedArrays = function(nums1, nums2) {
  function findKth(nums1, i, nums2, j, k) {
    let x = nums1.length,
      y = nums2.length;
    if (i >= x) return nums2[j + k - 1];
    if (j >= y) return nums1[i + k - 1];
    if (k == 1) return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
    let t = parseInt(k / 2);
    let mid1 = t + i > x ? MAX_INT : nums1[i + t - 1];
    let mid2 = t + j > y ? MAX_INT : nums2[j + t - 1];

    if (mid1 < mid2) {
      return findKth(nums1, i + t, nums2, j, k - t);
    } else {
      return findKth(nums1, i, nums2, j + t, k - t);
    }
  }

  const MAX_INT = Math.pow(2, 53) - 1;
  let m = nums1.length,
    n = nums2.length,
    left = parseInt((m + n + 1) / 2),
    right = parseInt((m + n + 2) / 2);

  return (
    (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) /
    2.0
  );
};
