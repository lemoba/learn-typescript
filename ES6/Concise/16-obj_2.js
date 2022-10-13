/*
extends 允许一个子类继承父类，需要注意的是，子类的constructor 函数中需要执行 super() 函数。
当然，你也可以在子类方法中调用父类的方法，如super.parentMethodName()。
*/

/*
 * notes:
 * 类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误
 * 在类中定义函数不需要使用 function 关键词
*/
class Car {
    constructor() {
        console.log("Creating a new Car");
    }

    sayHello() {
        console.log('hello car');
    }
}


class Prosche extends Car {
    constructor() {
        super();
        super.sayHello();
        console.log("Creating a new Prosche");
    }
}


let c = new Prosche();
