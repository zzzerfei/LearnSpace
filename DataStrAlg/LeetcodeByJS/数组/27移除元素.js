/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  /*
    // 暴力解法   
    let len = nums.length
    for (let i = 0; i < len; i++) {
      if (nums[i] == val) {
        for (let j = i + 1; j < len; j++) {
          nums[j - 1] = nums[j]
        }
        i--
        len--
      }
    }
    return len 
  */
  // 快慢指针
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i]
    }
  }
  return k
};