function createRepeat(fn, repeat, interval) {
  let count = 0
  return (params) => {
    const timer = setInterval(() => {
      fn(params)
      count++
      if (count >= repeat) {
        clearInterval(timer)
      }
    }, interval * 1000)
  }
}

const fn = createRepeat(console.log, 3, 4);

fn('helloWorld'); // 每4秒输出一次helloWorld, 输出3次