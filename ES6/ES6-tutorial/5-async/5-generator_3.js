function*  foo() {
    yield 1;
    yield 2;
    yield 3;
}

var f = foo();
console.log(f.next()); // { value: 1, done: false }

res = f.return("foo");
console.log(res) // { value: 'foo', done: true }

console.log(f.next()); // { value: undefined, done: true }

var g = function* () {
    try {
        yield;
    }catch(e) {
        console.log('catch inner', e)
    }
};


var i = g();
console.log(i.next())


try {
    i.throw('a');
    i.throw('a');
}catch(e) {
    console.log('throw outsize', e)
}