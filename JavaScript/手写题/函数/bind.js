Function.prototype.myBind = function (ctx, ...org) {
    const fn = Symbol('fn')
    fn = this
    return function Fn() {
        if (this instanceof Fn) {
            return new fn(...arg, ...arguments)
        }
        return fn.apply(ctx, arg.concat(arguments))
    }
}

function bar() {
    this.habit = 'shopping';
}

var bindFoo = bar.bind();

var obj = new bindFoo();

console.log(obj.habit); // shopping

let Name = {
    name: '大眼睛图图',
    say() {
        console.log(this, 'this')
        console.log(`我叫${this.name}`)
    }
}

Name1 = {
    name: '大耳朵图图'
}

// 测试
const fn = Name.say.bind(Name1)
fn()
// { name: '大耳朵图图' } this
// 我叫大耳朵图图
