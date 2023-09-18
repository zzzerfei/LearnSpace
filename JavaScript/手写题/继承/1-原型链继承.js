function Animal() {
	this.like = ['eat', 'drink', 'sleep'];
}

Animal.prototype.run = function () {
	console.log('跑步');
}

function Cat() {
	this.name = 'limingcan';
}

Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

const cat = new Cat()

cat.run() // 跑步
console.log(cat.like) // [ 'eat', 'drink', 'sleep' ]
console.log(cat) // Cat { name: 'limingcan' }