// 比较含有退格的字符串，"<-"代表退格键，"<"和"-"均为正常字符
// 输入："a<-b<-", "c<-d<-"，结果：true，解释：都为""
// 输入："<-<-ab<-", "<-<-<-<-a"，结果：true，解释：都为"a"
// 输入："<-<ab<-c", "<<-<a<-<-c"，结果：false，解释："<ac" !== "c"

function fn(str1, str2) {
  const doDelete = (str) => {
    let flag = 0
    const stack = []
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      stack.push(char)

      if (char === '<' && !flag) {
        flag += 1
      } else if (flag === 1) {
        if (char === '-') {
          flag += 1
        } else {
          flag -= 1
        }
      }

      if (flag === 2) {
        stack.pop()
        stack.pop()
        stack.pop()
        flag = 0
      }
    }
    console.log(String(stack))
    return String(stack)
  }
  return doDelete(str1) === doDelete(str2)
}
console.log(fn("a<-b<-", "c<-d<-"))
console.log(fn("<-<-ab<-", "<-<-<-<-a"))
console.log(fn("<-<ab<-c", "<<-<a<-<-c"))