const s1 = new Set();
const s2 = new Set(['erfei', 'handsome']);
const s3 = new Set(s2);
const s4 = new Set('aabbbbcdddd');

console.log(s1); // Set(0) {}
console.log(s2); // Set(2) { 'erfei', 'handsome' }
console.log(s3); // Set(2) { 'erfei', 'handsome' }
console.log(s4); // Set(4) { 'a', 'b', 'c', 'd' }

const s5 = new Set();
console.log(s5.size); // 0
s5.add(1);
console.log(s5); // Set(1) { 1 }
console.log(s5.size); // 1
s5.add(2, 3, 4, 5);
console.log(s5); // Set(2) { 1, 2 }
console.log(s5.size); // 2
s5.add(3).add(4).add(5)
console.log(s5); // Set(5) { 1, 2, 3, 4, 5 }
console.log(s5.size); // 5
s5.add([1, 2, 3, 4, 5]);
console.log(s5); // Set(6) { 1, 2, 3, 4, 5, [ 1, 2, 3, 4, 5 ] }
console.log(s5.size); // 6
console.log(s5.delete(1)); // true
console.log(s5.delete(5)); // true
console.log(s5.delete([1, 2, 3, 4, 5])); // false
console.log(s5); // Set(4) { 2, 3, 4, [ 1, 2, 3, 4, 5 ] }
console.log(s5.size); // 4
console.log(s5.has(2)); // true
console.log(s5.has(5)); // false
console.log(s5); // Set(4) { 2, 3, 4, [ 1, 2, 3, 4, 5 ] }
console.log(s5.size); // 4
s5.clear();
console.log(s5); // Set(0) {}
console.log(s5.size); // 0


