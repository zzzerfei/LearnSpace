/**
 * 节流：n秒内只运行一次，若在 n 秒内重复触发，只有一次生效
 */
function mythrottled1(fn, delay = 500) {
  let oldTime = Date.now()
  return function (...args) {
    let newTime = Date.now()
    if (newTime - oldTime >= delay) {
      fn.apply(null, args)
      oldTime = Date.now()
    }
  }
}

function mythrottled2(fn, delay = 500) {
  let timer = null
  return function (...args) {
    if (!timer) {
      itemr = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}