// 类似于 WeakMap，WeakSet 对象可以让你在一个集合中保存对象的弱引用，在 WeakSet 中的对象只允许出现一次：

var ws = new WeakSet();
var obj = {};
var foo = {};

var window = {}

ws.add(window);
ws.add(obj);

console.log(ws.has(window)) // true
console.log(ws.has(foo)) // false


ws.delete(window);
console.log(ws.has(window)) // false