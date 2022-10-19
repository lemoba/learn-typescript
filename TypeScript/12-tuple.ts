// 我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。

var mytuple0 = [10, "Runboob"];

var mytuple2 = []
mytuple2[0] = 10;
mytuple2[1] = "Runoob";
mytuple2[2] = 20;

console.log(mytuple2)
console.log(mytuple2[0])
console.log(mytuple2[1])

// 元组运算
// 我们可以使用以下两个函数向元组添加新元素或者删除元素：
// push() 向元组添加元素，添加在最后面。
// pop() 从元组中移除元素（最后一个），并返回移除的元素。
var mytuple = [10,"Hello","World","typeScript"];
console.log(mytuple.length)

// 添加
mytuple.push(12)
console.log(mytuple)
console.log(mytuple.length)

// 删除
mytuple.pop()
console.log(mytuple)
console.log(mytuple.length)


// 更新元组
mytuple[0] = 121
console.log(mytuple)


// 结构元组
var [aa,bb,cc,dd] = mytuple
console.log(aa,bb,cc,dd)