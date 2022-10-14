// 箭头函数

var f = v => v;

// 等价于
var f = function(a) {
    return a;
}

console.log(f(1))


// 当箭头函数没有参数或者有多个参数，要用 () 括起来。
var f2 = (a, b) => a + b;
console.log(f2(1, 2))


// 当箭头函数函数体有多行语句，用 {} 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 {} , 结果会自动返回。
var f3 = (a, b) => {
    let result = a + b;
    return result;
}

console.log(f3(6, 2))

// 当箭头函数要返回对象的时候，为了区分于代码块，要用 () 将对象包裹起来

// 报错
// var f = (id, name) => {id: id, name:name};
// f(6, 2)

var f4 = (id, name) => ({id: id, name: name});
console.log(f4(6, 2)); // {id: 6, name: 2}

// 没有 this、super、arguments 和 new.target 绑定。

var f5 = () => {
    // 箭头函数没有this对象
    // 此时的 this 是外层的 this 对象，即 Window 
    console.log(this)
}

f5(11)


function fn6(){
    setTimeout(()=>{
      // 定义时，this 绑定的是 fn 中的 this 对象
      console.log(this.a);
    },0)
  }
  var a = 20;
  // fn 的 this 对象为 {a: 18}
  fn6.call({a: 18});  // 18