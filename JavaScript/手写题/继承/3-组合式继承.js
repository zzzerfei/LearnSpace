function Animal(name) {
	this.name = name;
	this.like = ['eat', 'drink', 'sleep'];
	this.play = function () {
		console.log('到处玩');
	}
}

Animal.prototype.run = function () {
	console.log('跑步');
}

function Cat(name, age) {
	Animal.call(this, name)
	this.age = age
}

Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

const cat = new Cat('zyh', 3)
cat.run() // 跑步