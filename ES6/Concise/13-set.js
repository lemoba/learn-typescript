// Set 对象是一组不重复的值，重复的值将被忽略，值类型可以是原始类型和引用类型：

let mySet = new Set([1, 1, 2, 2, 3, 3]);

console.log(mySet.size);
console.log(mySet.has(1));
console.log(mySet.add('strings'));
console.log(mySet.add({a: 1, b: 2}));


mySet.forEach(item => {
    console.log(item)
    //1
    // 2
    // 3
    // strings
    // { a: 1, b: 2 }
})


for (let value of mySet) {
    console.log(value)
    //1
    // 2
    // 3
    // strings
    // { a: 1, b: 2 }
}