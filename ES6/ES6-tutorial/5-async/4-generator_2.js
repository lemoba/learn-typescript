function* sendParameter() {
    console.log("start")

    var x = yield '2';
    console.log("one:" + x);

    var y = yield '3';
    console.log("two:" + y);

    console.log("total:" + (x + y))
}


var sp = sendParameter()

// start
// { value: '2', done: false }
console.log(sp.next())

// one:undefined
// { value: '3', done: false }
console.log(sp.next())

// two:undefined
// total:NaN
// { value: undefined, done: true }
console.log(sp.next())

console.log("----------------------------")
var sp2 = sendParameter()

console.log(sp2.next(10))
console.log(sp2.next(20))
console.log(sp2.next(30))