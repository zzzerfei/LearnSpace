
/* 
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target
如果目标值存在返回下标，否则返回 -1。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分查找
  // 左闭右闭区间
  /*   
    let len = nums.length
    let left = 0, right = len - 1
    for(let i = 0; i <= len; i++) {
      let mid = left + Math.floor((right - left)/2)
      if(target < nums[mid]) {
        right = mid - 1
      } else if(target > nums[mid]){
        left = mid + 1
      } else {
        return mid
      }
    }
    return -1 
  */

  // 左闭右开区间
  let left = 0, right = nums.length;
  // 使用左闭右开区间 [left, right)
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target < nums[mid]) {
      right = mid;  // 去左区间寻找
    } else if (target > nums[mid]) {
      left = mid + 1;   // 去右区间寻找
    } else {
      return mid;
    }
  }
  return -1;
};