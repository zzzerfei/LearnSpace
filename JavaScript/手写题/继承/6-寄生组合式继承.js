
function Animal(name, sex) {
	this.name = name;
	this.sex = sex;
	this.like = ['eat', 'drink', 'sleep'];
}

function Cat(name, sex, age) {
	Animal.call(this, name, sex);
	this.age = age;
}

function inheritObj(parentClass, childClass) {
	childClass.prototype = Object.create(parentClass.prototype)
	childClass.prototype.constructor = childClass
}

// 为父类的原型添加一个run方法
Animal.prototype.run = function () {
	console.log('跑步');
}

// 实现寄生组合继承
inheritObj(Animal, Cat);

// 给子类的原型添加一个方法
Cat.prototype.catwalk = function () {
	console.log('走猫步');
}

// 实例一个由子类new 出来的对象
const cat = new Cat('limingcan', 'man', 27);

console.log(cat);
