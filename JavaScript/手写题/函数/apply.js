Function.prototype.myApply = function(ctx, arg) {
    ctx = ctx || window
    let fn = Symbol()
    ctx[fn] = this
    ctx[fn](...arg)
    delete ctx[fn]
}
let Name = {
    name: '大眼睛图图',
    say(a,b) {
        console.log(this, 'this')
        console.log(`我叫${this.name}${a}${b}`)
    }
}

Name1 = {
    name: '大耳朵图图'
}
Name.say.apply(Name1,['大眼睛','大耳朵'])
Name.say.apply(Name1, ['1', '2'])
Name.say.myApply(Name1, ['1', '2'])