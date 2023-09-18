const deepClone = (target, map = new WeakMap()) => {
  // 1.非引用类型直接返回
  if (typeof target != 'object' || target === null) {
    return target
  }

  // 2. 针对特殊的引用类型特殊处理 如正则 日期 Map Set
  const constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) {
    return new map.get(target)
  }

  // 3. 解决共同引用 循环引用问题 借助 WeakMap 来处理这个问题
  if (map.get(target)) {
    return map.get(target)
  }

  // 4. 新建一个对象
  const cloneTarget = Array.isArray(target) ? [] : {}
  map.set(target, cloneTarget)

  // 5. 对象属性中有可能还是引用对象 需要递归调用
  Object.keys(target).forEach(key => {
    cloneTarget[key] = deepClone(target[key], map)
  })

  // 6. 返回最终结果
  return cloneTarget
}

const base = {
  name: '张三',
  age: 18,
}

const obj = { base }

const res = deepClone(obj)

console.log(obj)
console.log(res)
res.base.age = 19
console.log(obj)
console.log(res)
console.log(obj == res) // false