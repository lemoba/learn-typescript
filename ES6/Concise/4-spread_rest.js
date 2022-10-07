function foo(x, y, z) {
    console.log(x, y, z);
}

let arr = [1, 2, 3];
foo(...arr);


function foo1(...args) {
    console.log(args);
}

foo1(1, 2, 3);