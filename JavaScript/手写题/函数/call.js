Function.prototype.myCall = function(ctx, ...arg) {
    ctx = ctx || window
    let fn = Symbol()
    ctx[fn] = this
    ctx[fn](...arg)
    delete ctx[fn]
}

let Name = {
    name: 'zyh',
    say() {
        console.log(this, 'this')
        console.log(`我叫${this.name}`)
    }
}

Name1 = {
    name: 'erfei'
}

Name.say()
// { name: 'zyh', say: [Function: say] } this      
//  zyh

Name.say.call(Name1)
// { name: 'erfei' } this
// 我叫erfei

Name.say.myCall(Name1)
// { name: 'erfei' } this
// 我叫erfei

