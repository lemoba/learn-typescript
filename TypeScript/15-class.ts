class Car {
    // 字段
    engine: string;

    // 构造函数
    constructor(engine: string) {
        this.engine = engine;
    }

    // 方法
    display(): void {
        console.log("发动机为 :   "+this.engine)
    }
}

// 创建一个对象
var obj1 = new Car("XXSY1")

// 访问字段
console.log("发动机型号为 :  "+obj1.engine)

// 访问方法
obj1.display()

// 类的继承

class Shape {
    Area:number
    constructor(a:number) {
        this.Area = a
    }
}

class Circle extends Shape {
    disp():void {
        console.log("圆的面积:  "+this.Area)
    }
}

var obj2 = new Circle(223)
obj2.disp()


// 继承类的方法重写
// 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
// 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。

class PrinterClass {
    doPrint():void {
        console.log("父类的 doPrint() 方法。")
    }
}


class StringPrinter extends PrinterClass {
    doPrint():void {
        super.doPrint()
        console.log("子类的 doPrint() 方法。")
    }
}

var obj3 = new StringPrinter();

// static 关键字
// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。

class StaticMem {
    static num:number

    static disp():void {
        console.log("num 值为 "+ StaticMem.num)
    }
}

StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法


// instanceof 运算符

class Persons {}

var obj4 = new Persons();
var isPerson = obj4 instanceof Persons;

console.log("obj4 对象是 Person 类实例化来的吗？ " + isPerson);

// 访问控制修饰符
// TypeScript 支持三种访问控制修饰符：
// public、private、protected

class Encapsulate { 
    str1:string = "hello" 
    private str2:string = "world" 
 }

var obj5 = new Encapsulate()
console.log(obj5.str1)   // 可访问
//console.log(obj5.str2)   // 编译错误，str2 是私有的


// 类和接口

interface ILoan {
    interest:number
}

class AgriLon implements ILoan {
    interest: number;
    rebate: number;

    constructor(interest: number,rebate: number) {
        this.interest = interest
        this.rebate = rebate
    } 
}

var obj6 = new AgriLon(10,1)

console.log("利润为 : "+obj6.interest+"，抽成为 : "+obj6.rebate )