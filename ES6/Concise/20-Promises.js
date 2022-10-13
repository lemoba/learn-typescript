/* 
ES6 对 Promise 有了原生的支持，
一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。
*/

const boolean = [false, true];

var p = new Promise(function(resolve, reject) {
    if (boolean[1]) {
        // fulfilled successfully
        resolve("successfull");  
      } else {
        // error, rejected
        reject("eror");  
      }
});

p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));