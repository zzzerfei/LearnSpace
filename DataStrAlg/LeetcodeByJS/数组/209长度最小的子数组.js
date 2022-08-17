/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
  /*   
    // 暴力解法
    let res = Infinity,  // 最终的结果
        sum = 0,  // 子序列和
        sublen = 0 // 子序列长度
    for (let i = 0; i < nums.length; i++) {
      sum = 0
      for (let j = i; j < nums.length; j++) {
        sum += nums[j]
        if(sum >= target) {
          sublen = j - i + 1
          res = res < sublen ? res : sublen // 
          break
        }
      }
    }
    return res === Infinity ? 0 : res 
  */
  // 滑动窗口
  let len = nums.length
  let l = r = sum = 0,
    res = len + 1
  while (r < len) {
    sum += nums[r++]
    while (sum >= target) {
      res = res < r - l ? res : r - l
      sum -= nums[l++]
    }
  }
  return res > len ? 0 : res
};