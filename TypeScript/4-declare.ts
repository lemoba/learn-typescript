// ts变量命名规则
// 1. 变量可以包含数组和字母
// 2. 除了_和$之外的特殊字符都不可以
// 3. 变量名不能以数字开头
// 4. 不能使用关键字

// 使用前必须先声明 使用var来声明变量
// 1. var [变量名]: [类型] = [值]
var uname: string = "Runboob";

// 2. var [变量名]: [类型];
var uname: string;

// 3. 声明变量并初始值，但不设置类型，该变量可以是任意类型：
var uname = "Runoob";

// 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
var uname1;
console.log(uname1); // 输出 undefined


// 类型断言(Type Assertion)
// 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

//语法格式：<类型>值 或 值 as 类型

var str = '1';
var str2: number = <number> <any> str;  //str、str2 是 string 类型
console.log(str2)

// 类型推断
var num = 2; // 推断出num是number
console.log(num)
// num = "123" // 编译错误，不能将类型“string”分配给类型“number”

// 变量作用域
// 1. 全局作用域− 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
// 2. 局部作用域− 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
// 3. 类作用域- 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。

var global_num = 12          // 全局变量

class Numbers {
     num_val = 13           // 实例变量
     static sval = 10;      // 静态变量

     storeNum():void {
        var local_num = 14; // 局部变量
     }
}

console.log("全局变量为: "+global_num)
console.log("静态变量为: "+Numbers.sval)
var oj = new Numbers();
console.log("实例变量为: "+oj.num_val)