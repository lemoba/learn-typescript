/*
在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。
class 的本质是 function。
它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。
*/

/* 类定义 */

// 匿名类
let Example = class {
    constructor() {
        this.a = a
    }
}

// 命名类
let Example2 = class Example {
    constructor() {
        this.a = a
    }
}

/* 类声明 */
// note: 不可重复声明

class Example3 {
    constructor() {
        this.a = a
    }
}


