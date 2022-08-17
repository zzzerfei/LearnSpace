function foo() {
    return [1, 2, 3]
}
/* let tmp = foo(),
    a = tmp[0], b = tmp[1], c = tmp[2]
console.log(a, b, c) */

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}
/* let tmp1 = bar(),
    x1 = tmp1.x, y1 = tmp1.y, z1 = tmp1.z
console.log(x1, y1, z1) */

// 解构示例
/* let [a, b, c] = foo()
let { x: x, y: y, z: z } = bar()
console.log(a, b, c, x, y, z) */


let { x: bam, y: baz, z: bap } = bar()
console.log(bam, baz, bap); // 4 5 6
console.log(x, y, z) // ReferenceError