const p = new Promise(function(resolve, reject) {
    resolve('success')
})

p.then(function(value) {
    console.log(value)
})

console.log('first')

// 在 JavaScript 事件队列的当前运行完成之前，回调函数永远不会被调用。
// first
// sucess