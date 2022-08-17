function max(a = 0, ...rest) { // 为第一个 argument 设定默认值 0，获得剩余的所有 arguments 进入 rest 数组
    let maxValue = a;
    for (let n of rest) { // 遍历数组 rest

        if (n > a) {
            maxValue = n;
        }
    }
    return maxValue;
}
let res = max(1, 2, 5, 234, 66, 44, 165); // 165
console.log(res)