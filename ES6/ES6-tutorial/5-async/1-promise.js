/**
 * Promise 异步操作有三种状态：pending(进行中)、fulfilled(已完成)和rejected(已失败)
 * Promise 对象只有2中状态变化：
 *         1:从pending变成fulfilled
 *         2:从pending变成rejected
 * 只要处于fulfilled和rejected,状态就不会再变了即resolved(已定型)
 */

const p1 = new Promise((resolve, reject) => {
    resolve('sucess1')
    resolve('sucess2')
});

const p2 = new Promise((resolve, reject) => {
    resolve('sucess3')
    reject('reject')
})


p1.then(function(value) {
    console.log(value) // sucess1
})

p2.then(function(value) {
    console.log(value) // sucess3
})