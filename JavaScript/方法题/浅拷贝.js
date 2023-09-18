const clone = (target) => {
  // 1. 基本数据类型直接返回
  if (typeof target !== 'object' || target == null) {
    return target
  }

  // 2. 创建新对象
  const cloneTarget = Array.isArray(target) ? [] : {}

  // 3. 循环处理
  Object.keys(target).forEach(key => {
    cloneTarget[key] = target[key]
  })

  return cloneTarget
}

const base = {
  name: '张三',
  age: 18,
}

const obj = { base }

const res = clone(obj)

console.log(obj)
console.log(res)
res.base.age = 19
console.log(obj)
console.log(res)
console.log(obj == res) // false