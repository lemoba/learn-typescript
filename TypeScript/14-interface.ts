// 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。


interface IPerson {
    firstName: string;
    lastName: string;
    SayHi:() => string;
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    SayHi: ():string =>{return "Hi there"}
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.SayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    SayHi: ():string =>{return "Hello!!!"}
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)
console.log(employee.SayHi())

console.log("---------------------------")

// 联合类型和接口
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
var type: any = options.commandline;
console.log(type[0]);
console.log(type[1]);

 
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());

// 接口和数组
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。

interface namelist {
    [index:number]:string
}

//var list2:namelist = ["John",1,"Bran"] //error, '1' is not type of string
var list5: namelist = ["John","Bran"]
console.log(list5)

//  接口继承
// 接口继承就是说接口可以通过其他接口来扩展自己。
// Typescript 允许接口继承多个接口。
// 继承使用关键字 extends。

 
// 单继承

interface Person {
    age:number;
}

interface Musician extends Person {
    instruments:string
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instruments = "Drums";
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instruments)


// 多继承

interface IParent1 {
    v1:number
}

interface IParent2 {
    v2:number
}

interface Child extends IParent1, IParent2 { }
var Iobj:Child = { v1:12, v2:23}
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2 )
