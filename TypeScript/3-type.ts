// 1. 任意类型 any 用来表示允许赋值为任意类型的值
let notSure: any = 4;
console.log(notSure);

// 2. 数字类型 number 双精度64位浮点值，可以用来表示整数和分数
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制
console.log(binaryLiteral, octalLiteral, decLiteral, hexLiteral);

// 3. 字符串类型 string 使用双引号或单引号表示字符串类型，反引号表示模板字符串
let names: string = "Runoob";
let years: number = 5;
let words: string = `你好，今年是 ${names} 发布 ${years} 周年`;
console.log(words);

// 4. 布尔类型 boolean 表示逻辑值，只有两个值 true 和 false
let flag: boolean = true;
console.log(flag);

// 5. 数组类型 array 有两种方式可以定义数组类型
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list, list2);

// 6. 元组类型 tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number];
x = ["Runoob", 1];
// x = [1, "Runoob"]; // 错误
console.log(x[0]);

// 7. 枚举类型 enum 用于定义数值集合
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c); // 1

// 8. void 类型 void 表示没有任何类型，一般用于定义方法的时候方法没有返回值
function alertName(): void {
    console.log("My name is Runoob");
}
alertName();

// 9. null 表示对象值缺失

// 10. undefined 表示未初始化

// 11. never 表示的是那些永不存在的值的类型，例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

// note 
// 1. TypeScript 2.0 以后，可以使用 null 和 undefined 来定义这两个原始数据类型
// 2. TypeScript 2.0 以后，可以使用 void 来定义没有任何类型的变量
// 3. TypeScript 2.0 以后，可以使用 never 来定义永不存在的值的类型
// 4. TypeScript 和 JavaScript 没有整数类型。


// let x1: number;
// x1 = 1;
// x1 = undefined; // error
// x1 = null;   // error

// let x1: number | null |  undefined;
// x1 = 1;
// x1 = undefined;
// x1 = null;

// never类型
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：

let a: never;
let b: number;

// 编译错误，数字类型不能转为 never 类型
// a = 123; 

// 运行正确，never 类型可以赋值给 never类型
a = (() => {throw new Error("exception")})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

error("error");


// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {
    }
}