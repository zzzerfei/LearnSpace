function myNew(Fn, ...args) {
  const obj = {}
  obj.__proto__ = Fn.prototype
  const res = Fn.apply(obj, args)
  return res instanceof Object ? res : obj
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name)
}

let p = myNew(Person, "huihui", 123)
console.log(p) // Person {name: "huihui", age: 123}
p.say() // huihui