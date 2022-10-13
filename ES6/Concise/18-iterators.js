/**
* 迭代器允许每次访问数据集合的一个元素，当指针指向数据集合最后一个元素时，迭代器便会退出。
它提供了 next() 函数来遍历一个序列，这个方法返回一个包含 done 和 value 属性的对象。
* ES6 中可以通过 Symbol.iterator 给对象设置默认的遍历器，无论什么时候对象需要被遍历，执行它的 @@iterator 方法便可以返回一个用于获取值的迭代器。
* 数组默认就是一个迭代器：
* 你可以通过 [Symbol.iterator]() 自定义一个对象的迭代器。
 */


var arr = [11, 12, 13];
var itr = arr[Symbol.iterator]();

console.log(itr.next()); // { value: 11, done: false }
console.log(itr.next()); // { value: 12, done: false }
console.log(itr.next()); // { value: 12, done: false }

console.log(itr.next()); // { value: undefined, done: true }