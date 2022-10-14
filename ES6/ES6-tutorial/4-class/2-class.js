class Example {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Example')
    }
    sum() {
        return this.a + this.b;
    }
}

let exam1 = new Example(2, 1);
let exam2 = new Example(3, 1);

console.log(Object.getPrototypeOf(exam1) === Object.getPrototypeOf(exam2));


Object.getPrototypeOf(exam1).sub = function () {
    return this.a - this.b
}

console.log(exam1.sub()); // 1
console.log(exam2.sub()); // 2