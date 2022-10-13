// WeakMap 就是一个 Map，只不过它的所有 key 都是弱引用，意思就是 WeakMap 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题。
// 另一个需要注意的点是，WeakMap 的所有 key 必须是对象。它只有四个方法 delete(key),has(key),get(key) 和set(key, val)：

let w = new WeakMap();

// w.set('a', 'b') // TypeError: Invalid value used as weak map key

var o1 = {},
    o2 = function(){};
    // o3 = window;

w.set(o1, 37);
w.set(o2, "azert");
// w.set(o3, undefined)


// console.log(w.get(o3)) // ReferenceError: window is not defined

console.log(w.has(o1)); // true
w.delete(o1);
console.log(w.has(o1)); // false

console.log(w.get(o2))