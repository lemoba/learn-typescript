// Map 对象保存键值对，并且能够记住键的原始插入顺序。

// let map = new Map();

// let map2 = new Map([
//     ["key1", "value1"],
//     ["key2", "value2"]
// ]);



let nameMapping = new Map();


// 设置 Map 对象
nameMapping.set("Google", 1);
nameMapping.set("Runoob", 2);
nameMapping.set("Taobao", 3);

// 获取键对应的值
console.log(nameMapping.get("Runoob")); // 输出 2
console.log(nameMapping.get("Taobao")); // 输出 3
console.log(nameMapping.get("Google")); // 输出 1

// 判断 Map 中是否包含键对应的值
console.log(nameMapping.has("Google")); // 输出 true
console.log(nameMapping.has("Googl1e")); // 输出 false

// 返回 Map 对象键/值对的数量
console.log(nameMapping.size); // 输出 3


// 删除 Map 中的键对应的值
nameMapping.delete("Google");
console.log(nameMapping.has("Google")); // 输出 false
console.log(nameMapping)

// 移除 Map 对象的所有键/值对
nameMapping.clear();
console.log(nameMapping)

// tsc --target es6 test.ts

// 迭代map
// Map 对象中的元素是按顺序插入的，我们可以迭代 Map 对象，每一次迭代返回 [key, value] 数组。
// TypeScript使用 for...of 来实现迭代：

nameMapping.set("Google", 1);
nameMapping.set("Runoob", 2);
nameMapping.set("Taobao", 3);

// 迭代map中的key
for (let key of nameMapping.keys()) {
    console.log(key);
}

// 迭代map中的value
for (let value of nameMapping.values()) {
    console.log(value);
}

// 迭代 Map 中的 key => value
for (let entry of nameMapping.entries()) {
    console.log(entry[0], entry[1]);
}


// 使用对象解析
for (let [key, value] of nameMapping.entries()) {
    console.log(key, value);
}