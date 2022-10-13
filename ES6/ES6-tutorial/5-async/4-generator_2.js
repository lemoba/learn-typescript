function* sendParameter() {
    console.log("start")

    var x = yield '2';
    console.log("one:" + x);

    var y = yield '3';
    console.log("two:" + y);

    console.log("total:" + (x + y))
}