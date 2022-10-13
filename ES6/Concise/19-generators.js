// Generator 函数是 ES6 的新特性，它允许一个函数返回的可遍历对象生成多个值。
// 每次执行 yield 时，返回的值变为迭代器的下一个值。

function *infiniteNumbers() {
    var n = 1
    while (true) {
        yield n++;
    }
}

var numbers = infiniteNumbers(); // return an iterable object 
console.log(numbers);

console.log(numbers.next()) // { value: 1, done: false }
console.log(numbers.next()) // { value: 2, done: false }
console.log(numbers.next()) // { value: 3, done: false }