const listTree = [
	{
		id: 1,
		name: '部门1',
		pid: 0,
		children: [
			{
				id: 2,
				name: '部门1-1',
				pid: 1,
				children: [
					{
						id: 4,
						name: '部门1-1-1',
						pid: 2,
						children: []
					}
				]
			},
			{
				id: 3,
				name: '部门1-2',
				pid: 1,
				children: [
					{
						id: 5,
						name: '部门1-2-1',
						pid: 3,
						children: []
					}
				]
			}
		]
	},
	{
		id: 6,
		name: '部门2',
		pid: 0,
		children: [
			{
				id: 7,
				name: '部门2-1',
				pid: 6,
				children: []
			}
		]
	},
	{
		id: 8,
		name: '部门3',
		pid: 0,
		children: []
	}
]

/**
 * 三种方法
 * 	1. reduce
 * 	2. 递归
 * 	3. 广度优先遍历
 */

// 1. reduce
// function treeToArray1(listTree, key) {
// 	return listTree.reduce((arr, item) => {
// 		const callee = arguments.callee
// 		console.log('callee', callee)
// 		arr.push(item)
// 		if(item[key] && item[key].length > 0) {
// 			item[key].reduce(callee, arr)
// 		}
// 		return arr
// 	}, []).map(item => {
// 		item[key] = []
// 		return item
// 	})
// }
// const res1 = treeToArray1(listTree, 'children')
// console.log(res1)

// 2. 递归
function getItem(listTree, result) {
	for(let i = 0; i < listTree.length; i++) {
		if(listTree[i].children) {
			getItem(listTree[i].children, result)
			delete listTree[i].children
		}
		result.push(listTree[i])
	}
	return result
}
function treeToArray2(listTree) {
	const res = []
	getItem(listTree, res)
	return res.sort((a, b) => a.id - b.id)
}
const res2 = treeToArray2(listTree)
console.log(res2)

// 3. 广度优先遍历
// function treeToArray3(listTree, childName = 'children') {
// 	let queen = []
// 	const result = []
// 	queen = queen.concat(listTree)
// 	while(queen.length) {
// 		const first = queen.shift()
// 		if(first[childName]) {
// 			queen = queen.concat(first[childName])
// 			delete first[childName]
// 		}
// 		result.push(first)
// 	}
// 	return result
// }
// const res3 = treeToArray3(listTree, 'children')
// console.log(res3)