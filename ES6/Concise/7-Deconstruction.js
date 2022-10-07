// 对象和数组解构
/*
解构可以避免在对象赋值时产生中间变量
*/

function foo() {
    return [1, 2, 3];
}

let arr = foo(); // [1, 2, 3]
console.log(arr);

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

let {x: x1, y: y1, z: z1} = bar();

console.log(x1, y1, z1); // 4 5 6

