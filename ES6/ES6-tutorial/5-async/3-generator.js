function* func() {
    console.log("one");
    yield '1';
    console.log("two");
    yield '2';
    console.log("three");
    return '3';
}

f = func();

console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())