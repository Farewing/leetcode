/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // var a = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   var t = nums[i];
  //   nums.splice(i, 1);
  //   switch (t) {
  //     case 0:
  //       nums.unshift(t);
  //       a++;
  //       break;
  //     case 1:
  //       nums.splice(a, 0, t);
  //       break;
  //     case 2:
  //       nums.splice(i, 0, t);
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // return nums;

  //冒泡排序
  // for (let i = nums.length; i > 0; i--) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       let t = nums[j];
  //       nums[j] = nums[j + 1];
  //       nums[j + 1] = t;
  //     }
  //   }
  // }
  // return nums;

  //快排
  function quickSort(left, right) {
    if (left > right) return;
    var i = left;
    var j = right;
    var t = nums[left];
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

    quickSort(left, i - 1);
    quickSort(i + 1, right);
  }

  quickSort(0, nums.length - 1);
  return nums;
};

function mergeSort(arr, left, right, temp) {
  if (first < last) {
    let mid = Math.floor((first + last) / 2);
    mergeSort(arr, first, mid, temp); // 左子数组有序
    mergeSort(arr, mid + 1, last, temp); // 右子数组有序
    arr = mergeArray(arr, first, mid, last, temp);
  }
  return arr;
}

function mergeArray(arr, first, mid, last, temp) {
  let i = first;
  let m = mid;
  let j = mid + 1;
  let n = last;
  let k = 0;
  while (i <= m && j <= n) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  while (i <= m) {
    temp[k++] = arr[i++];
  }
  while (j <= n) {
    temp[k++] = arr[j++];
  }
  for (let l = 0; l < k; l++) {
    arr[first + l] = temp[l];
  }
  return arr;
}
