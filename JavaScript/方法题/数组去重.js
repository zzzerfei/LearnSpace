// ES6 Set 方法
const arr = [1, 2, 2, 3, 5, 6, 6]
console.log(arr);

const uniq1 = (arr) => {
  return [...new Set(arr)]
}

console.log(uniq1(arr));

// 两层循环
function uniq2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1)
        j--;
        arr.length--
      }
    }
  }
  return arr
}
console.log(uniq2(arr));

// 利用数组方法
function uniq3(arr) {
  // return arr.filter((val, index, self) => self.indexOf(val) === index)
  return arr.reduce((newArr, curItem) => {
    if (!newArr.includes(curItem)) {
      newArr.push(curItem)
    }
    return newArr
  }, [])
}
console.log(uniq3(arr));

// 利用 Map
function uniq4(arr) {
  const map = new Map()
  const newArr = []
  for (let item of arr) {
    if (!map.has(item)) {
      map.set(item, true)
      newArr.push(item)
    }
  }
  return newArr
}
console.log(uniq4(arr));

// 有序数组原地去重
const arrForInArr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const uniqInArr = (arr) => {
  if (arr.length == 0) return 0
  let slow = 0
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast]
    }
  }
  return slow + 1
}
const len = uniqInArr(arrForInArr)
console.log('数组长度', len)
console.log('去重后的数组', arrForInArr.slice(0, len))
