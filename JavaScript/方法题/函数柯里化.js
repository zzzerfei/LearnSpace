const curry = (fn) => {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn(...args.concat([...arguments]))
      }
    }
    return fn(...args)
  }
}