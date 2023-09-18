/**
 * 请实现一个函数，要求能在页面请求很多时，尽可能快地按照顺序输出返回的结果
 */
const promiseList = [
	new Promise((resolve) => {
		setTimeout(resolve, 1000)
	}),
	new Promise((resolve) => {
		setTimeout(resolve, 2000)
	}),
	new Promise((resolve) => {
		setTimeout(resolve, 3000)
	}),
	new Promise((resolve) => {
		setTimeout(resolve, 1500)
	})
]

fn(promiseList);

const fn = (promiseList) => {
	const results = []
	const concurrentLimit = 5 // 控制并发请求数量
	const queue = promiseList.splice() // 队列 存储请求

	async function sendRequest() {
		// 当队列为空的时候，所有请求搞完了 返回结果
		if(queue.length == 0) {
			console.log(results)
			return 
		}

		// 取出第一个请求
		const request = queue.shift()
		try {
			const response = await fetch(request)
			const result = await response.text
			results.push(result)
			sendRequest()
		} catch(e) {
			console.log('这个请求失败了',e)
			sendRequest()
		}
	}

	for(let i = 0; i < concurrentLimit.length; i++) {
		sendRequest()
	}

}