// 将类数组对象或可迭代对象转化为数组
// Array.from(arrayLike[, mapFn[, thisArg]])

// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2]));

// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]

// mapFn
console.log(Array.from([1, 2, 3], (n) => n * 2)); // [ 2, 4, 6 ]


let map = {
    do: function(n) {
        return n * 2;
    }
}

let arrayLike = [1, 2, 3];
console.log(Array.from(arrayLike, function(n) {
    return this.do(n)
}, map)) // [2, 4, 6]




