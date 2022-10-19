var txt = new String("string");

//var txt = "string";

// 对象属性
// 1. constructor   对创建该对象的函数的引用

var str3 = new String("string");
console.log(str3.constructor); // [Function: String]

// 2. length   字符串的长度
console.log(str3.length); // 6

// 3. prototype   允许您向对象添加属性和方法