function testAwait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("testAwait");
            resolve();
        })
    }, 1000);
}


async function helloAsync() {
    await testAwait();
    console.log("helloAsync")
}


helloAsync()