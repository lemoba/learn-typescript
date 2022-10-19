var number1 = new Number(12);

// 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。
console.log(number1);


console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);


// NaN 属性用于检测一个值是否是数字。

var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("月份是 " + month);
} else {
    console.log("输入正确...");
}


// Number对象方法

// toExponential() 方法以指数计数法返回一个数字的字符串表示。
var num2 = 1111
var val2 = num2.toExponential();
console.log(val2);

// toFixed() 方法把 Number 四舍五入为指定小数位数的数字。

var num3 = 12.11111
console.log("num3.toFixed() 为 "+num3.toFixed())    // 输出：177
console.log("num3.toFixed(2) 为 "+num3.toFixed(2))  // 输出：177.23
console.log("num3.toFixed(6) 为 "+num3.toFixed(6))  // 输出：177.234000


// toLocaleString() 方法根据本地数字格式把数字格式化为字符串。
var num4 = new Number(177.1234); 
console.log(num4.toLocaleString());  // 输出：177.1234
console.log(typeof num4.toLocaleString());  // string

// toPrecision() 方法可把一个数字格式化为指定的长度。
var num5 = new Number(7.123456); 
console.log(num5.toPrecision());  // 输出：7.123456 
console.log(num5.toPrecision(1)); // 输出：7
console.log(num5.toPrecision(2)); // 输出：7.1

// toString() 把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。

var num6 = new Number(10); 
console.log(num6.toString());  // 输出10进制：10
console.log(num6.toString(2)); // 输出2进制：1010
console.log(num6.toString(8)); // 输出8进制：12

// valueOf() 返回一个 Number 对象的原始数字值。

var num7 = new Number(10); 
console.log(num7.valueOf()); // 输出：10