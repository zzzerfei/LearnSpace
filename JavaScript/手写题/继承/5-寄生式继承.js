const Animal = {
    name: 'nobody',
    like: ['eat', 'drink', 'sleep'],
    run() {
        console.log('跑步');
    }
};

const createObj = (parentProperty, ownProperty) => {
    const obj = Object.create(parentProperty, ownProperty)
    obj.walk = () => {
        console.log('走路')
    }
    return obj
}

const cat = createObj(Animal, {
    name: {
        value: 'zyh'
    }
})

cat.like.push('play')

const anotherCat = createObj(Animal, {
    name: {
        value: 'erfei'
    }
})

console.log(cat)
console.log(cat.name)
console.log(cat.like)
cat.run()
console.log(anotherCat)
console.log(anotherCat.name)
console.log(anotherCat.like)
