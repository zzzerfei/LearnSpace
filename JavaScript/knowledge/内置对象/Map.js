const m1 = new Map();
const m2 = new Map([['a', 1], ['b', 2]]);
const m3 = new Map(m2);
const obj = { c: 3, d: 4 }
const m4 = new Map(Object.entries(obj));

console.log(m1); // Map(0) {}
console.log(m2); // Map(2) { 'a' => 1, 'b' => 2 }
console.log(m3); // Map(2) { 'a' => 1, 'b' => 2 }
console.log(m4); // Map(2) { 'c' => 3, 'd' => 4 }

const m5 = new Map();
console.log(m5.size); // 0
m5.set('a', 111);
console.log(m5); // Map(1) { 'a' => 111 }
console.log(m5.size); // 1
m5.set('b', 222);
console.log(m5); // Map(2) { 'a' => 111, 'b' => 222 }
console.log(m5.size); // 2
console.log(m5.get('a')); // 111
console.log(m5.get('b')); // 222
console.log(m5.delete('a')); // true
console.log(m5.delete('c')); // false
console.log(m5); // Map(1) { 'b' => 222 }
console.log(m5.size); // 1
console.log(m5.has('a')); // false
console.log(m5.has('b')); // true
console.log(m5); // Map(1) { 'b' => 222 }
console.log(m5.size); // 1
m5.clear();
console.log(m5); // Map(0) {}
console.log(m5.size); // 0