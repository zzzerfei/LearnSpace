/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
  /*   
    let left = 0, right = nums.length - 1
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)
      if (target > nums[mid]) {
        left = mid + 1
      } else if(target < nums[mid]) {
        right = mid - 1
      } else {
        return mid
      }
    }
    return right + 1 
  */

  let left = 0, right = nums.length
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid
    } else {
      return mid
    }
  }
  return right
};