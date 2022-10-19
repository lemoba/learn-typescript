// 函数定义
function test() { 
    console.log("调用函数") 
} 

// 调用
test() 


// 函数返回值

function greet(): string {
    return "Hello World"
}


function caller() {
    var msg = greet()
    console.log(msg)
}

caller()

// 带参数函数
function add(x: number, y: number): number {
    return x + y
}

console.log(add(1, 2))


// 可选参数和默认参数
function buildName(firstName: string, lastName: string) {
    if (lastName)
        return firstName + " " + lastName
    else
        return firstName
}

// let result1 = buildName("Bob")               // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.")  // error, too many parameters
// let result3 = buildName("Bob", "Adams")         // ah, just right


function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName
    else
        return firstName
}

// let result1 = buildName("Bob")                // ah, just right
// let result2 = buildName("Bob", "Adams", "Sr.")  // error, too many parameters
// let result3 = buildName("Bob", "Adams")         // ah, just right




// 默认参数

function  calcautre_discount(price:number, rate: number = 0.50) : number {
    return price * rate
}

console.log(calcautre_discount(1000))
console.log(calcautre_discount(1000, 0.30))


// 剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ")
}

console.log(buildName3("Joseph", "Samuel", "Lucas", "MacKinzie"))


function addNumbers(...nums: number[]):  number {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum
}

console.log(addNumbers(1,2,3,4,5,6,7,8,9, 10))

// 匿名函数
var msg = function() {
    return "hello world"
}

console.log(msg())


// 匿名函数自调用
// (function () {
//     var x = "Hello!!";      // I will invoke myself
//     console.log(x)
// })()


// 构造函数
var myFunction = new Function("a", "b", "return a * b");
var rex = myFunction(4, 3);
console.log(rex)

// lambda函数
var foo = (x:number)=>10 + x
console.log(foo(100))


var foo2 = function(x:number) {
    return 10 + x
}

console.log(foo2(100))


//我们可以不指定函数的参数类型，通过函数内来推断参数类型:
var func = (x: any) => {
    if (typeof x == "number") {
        console.log(x + " 是一个数字")
    } else if (typeof x == "string") {
        console.log(x + " 是一个字符串")
    }
}
func(12) 
func("Tom")


var disp =()=> { 
    console.log("Function invoked"); 
} 
disp();


// 函数重载
// 相同函数名不同形参(数量 类型不同)
function disp2(s1: string): void;
function disp2(n1:number, s1: string): void;

function disp2(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}

disp2("abc") 
disp2(1,"xyz");

