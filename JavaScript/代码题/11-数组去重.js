const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

// 1. 利用 Set
const res1 = Array.from(new Set(arr))
console.log('1. 利用 Set', res1)

// 2. for 循环 + splice
const unique2 = (arr) => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len--;
        j--;
      }
    }
  }
  return arr
}
const res2 = unique2(arr)
console.log('2. 利用 for 循环 + splice', res2)

// 3. 利用 indexOf
const unique3 = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i])
  }
  return res
}
const res3 = unique3(arr)
console.log('3. 利用 indexOf', res3)

// 4. 利用 includes
const unique4 = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i])
  }
  return res
}
const res4 = unique4(arr)
console.log('4. 利用 includes', res4)

// 5. 利用 filter
const unique5 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
const res5 = unique5(arr)
console.log('5. 利用 filter', res5)

// 6. 利用 Map
const unique6 = (arr) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}
const res6 = unique6(arr)
console.log('6. 利用 Map', res6)