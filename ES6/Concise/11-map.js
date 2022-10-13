
// 每个对象都可以看作是一个Map
// 一个对象由多个key-val对构成， 在Map中，任何类型都可以作为对象的key

var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function() {};


// 设置值
myMap.set(keyString, "value 与 'a string' 关联");
myMap.set(keyObj, "value 与 keyObj 关联");
myMap.set(keyFunc, "value 与 keyFunc 关联");

myMap.size; // 3


// 获取值
const res = myMap.get(keyString) // value 与 'a string' 关联
const res2 = myMap.get(keyObj) // value 与 keyObj 关联
const res3 = myMap.get(keyFunc) // value 与 keyFunc 关联


console.log(res, res2, res3);