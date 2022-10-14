function testAwait(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);    
        }, 2000)
    });
}


async function helloAsync() {
    var x = await testAwait("hello world");
    console.log(x); // 2 seconds later print hello world
}


helloAsync()
