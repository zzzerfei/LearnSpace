function findNonZeroMinIndex(arr) {
  let min = Infinity, index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < min) {
      min = arr[i]
      index = i
    }
  }
  return index
}
const res = findNonZeroMinIndex([100, 1, 2, 6, 9, 10])
console.log(res)