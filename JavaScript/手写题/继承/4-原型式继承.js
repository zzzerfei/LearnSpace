// 利用 Object.create()
const Animal = {
	name: 'nobody',
	like: ['eat', 'drink', 'sleep'],
	run() {
		console.log('跑步');
	}
};

const cat = Object.create(
	Animal,
	{
		name: {
			value: 'zyh'
		}
	}
)
cat.like.push('play')

const anotherCat = Object.create(
	Animal,
	{
		name: {
			value: 'erfei'
		}
	}
)

console.log(cat)
console.log(cat.name)
console.log(cat.like)
cat.run()
console.log(anotherCat)
console.log(anotherCat.name)
console.log(anotherCat.like)
