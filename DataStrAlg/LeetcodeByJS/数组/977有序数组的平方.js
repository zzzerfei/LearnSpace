/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
  /*   
    // 暴力法
    let len = nums.length
    for (let i = 0; i < len; i++) {
      nums[i] = nums[i] * nums[i]
    }
    return nums.sort((a, b) => a - b) 
  */
  // 双指针法
  let len = nums.length
  let l = 0, r = len - 1, k = len - 1
  let res = new Array(len).fill(0)
  while (l <= r) {
    let left = nums[l] * nums[l],
        right = nums[r] * nums[r]
    if(left > right){
      res[k--] = left
      l++
    } else {
      res[k--] = right
      r--
    }
  }
  return res
};