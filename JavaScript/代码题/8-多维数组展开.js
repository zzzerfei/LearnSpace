// 处理二维数组
const arr2 = [1, 2, [3, 4, 5, 6, 7]];
// reduce + concant
const res2 = arr2.reduce((list, cur) => {
  return list.concat(cur)
}, [])
console.log(res2)
// apply + concat
const res3 = [].concat.apply([], arr2)
console.log(res3)

const arr = [1, 2, 3, [4, 5, [6, 7]], 8];
// ES6 flat() 方法
console.log(arr.flat(3))

// 递归
function flatten1(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten1(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
console.log(flatten1(arr))

// toString + split 只适用于全都是数字的情况
function flatten2(arr) {
  const str = arr.toString()
  return str.split(',')
}
console.log(flatten2(arr))


// 扩展运算符
function flatten3(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten3(arr))