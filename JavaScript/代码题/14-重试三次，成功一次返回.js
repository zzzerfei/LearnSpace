function fetchWithRetry(url, options, maxRetry = 3) {
	return new Promise((resolve, reject) => {
		const doFetch = async (attempt) => {
			try {
				const response = await fetch(url, options)
				if (response.ok) {
					resolve(response)
				} else {
					throw new Error('请求失败')
				}
			} catch (err) {
				if (attempt < maxRetry) {
					console.log('当前请求失败，进行下一次请求')
					doFetch(attempt + 1)
				} else {
					reject(new Error('已达到最大重试请求次数'))
				}
			}
		}
		doFetch(0)
	})
}