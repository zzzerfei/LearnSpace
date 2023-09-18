/**
 * 实现函数使得将str字符串中的{}内的变量替换，如果属性不存在保持原样（比如{a.d}）
 * var a = {
      b: 123,
      c: '456',
      e: '789',
    }
    var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
    // => 'a123aa456aa {a.d}aaaa'
 */
const a = {
  b: 123,
  c: '456',
  e: '789',
}
const str = `a{a.b}aa{a.c}aa {a.d}aaaa`;

// 借助正则表达式
function replaceVariables1(str, obj) {
  return str.replace(/\{([^{}]+)\}/g, (match, keys) => {
    console.log(match, keys, obj)
    const key = keys.split('.')[1]

    return obj[key] ? obj[key] : match
  })
}
const res1 = replaceVariables1(str, a)
console.log(res1)