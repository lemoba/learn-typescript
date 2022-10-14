async function helloAsync() {
    return "helloAsync";
}


console.log(helloAsync()) // Promise { 'helloAsync' }

helloAsync().then(v => {
    console.log(v); // helloAsync
});

