const list = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门1-1', pid: 1 },
  { id: 3, name: '部门1-2', pid: 1 },
  { id: 4, name: '部门1-1-1', pid: 2 },
  { id: 5, name: '部门1-2-1', pid: 3 },
  { id: 6, name: '部门2', pid: 0 },
  { id: 7, name: '部门2-1', pid: 6 },
  { id: 8, name: '部门3', pid: 0 },
]

/**
 * 数组转树 三种方法
 *  1. 递归
 *  2. 
 *  3.  
 */

// 递归
const getChild = (list, res, pid) => {
  for(const item of list) {
    if(item.pid === pid) {
      const newItem = {...item, children: []}
      res.push(newItem)
      getChild(list, newItem.children, item.id)
    }
  }
}
const listToTree1 = (list, pid) => {
  const result = []
  getChild(list, result, pid)
  return result
}
const res1 = listToTree1(list, 0)
console.log(res1)

// Map
const listToTree2 = (list) => {
  const result = []
  const itemMap = {}
  for(const item of list) {
    const id = item.id
    const pid = item.pid
    if(!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }
    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"]
    }
    const treeItem = itemMap[id]
    if(pid == 0) {
      result.push(treeItem)
    } else {
      if(!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
const res2 = listToTree2(list, 0)
console.log(res2)
