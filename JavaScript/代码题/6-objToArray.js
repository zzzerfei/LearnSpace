
function objToArray(obj) {
  return Object.keys(obj).reduce((arr, key) => {
    const op = Object.keys(obj[key])[0]
    const value = obj[key][op]
    arr.push({ key, op, value })
    return arr
  }, [])
}

console.log(
  objToArray({
    key1: {
      op1: "value1",
    },
    key2: {
      op2: "value2",
    },
  })
);
 // result示例
 // [
 //     {key: 'key1', op: 'op1', value: 'value1'},
 //     {key: 'key2', op: 'op2', value: 'value2'}
 // ]
