/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = startY = 0
  let loop = mid = Math.floor(n / 2)
  let offset = count = 1
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  while (loop--) {
    let row = startX, col = startY
    // 填充上行从左到右
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++
    }
    // 填充右列从上到下
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++
    }
    // 填充下行从右到左
    for (; col > startX; col--) {
      res[row][col] = count++
    }
    // 填充左列从下到上
    for (; row > startY; row--) {
      res[row][col] = count++
    }
    startX++
    startY++
    offset += 2
  }
  if (n % 2 === 1) {
    res[mid][mid] = count
  }
  return res
};