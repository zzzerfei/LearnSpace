// 防抖
/**
 * n 秒后再执行该事件，若在 n 秒内被重复触发，则重新计时
 * 电梯第一个人进来以后，等待 15 秒 这过程中有人进来 重新计时 15 秒 15秒后开始运送
 */
function mySimpleDebounce(func, wait) {
  let timeout
  return function () {
    let ctx = this
    let args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(ctx, args)
    }, wait)
  }
}

function myDebounce(func, wait, immediate) {

  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout); // timeout 不为null
    if (immediate) {
      let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) {
        func.apply(context, args)
      }
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}