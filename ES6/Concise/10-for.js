// for...of VS for...in

// 1. for...of 用于遍历一个迭代器，如数组：
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;

// 结果: di, boo, punkeye
for (let nickname of nicknames) {
    console.log(nickname);
}

// 2. for...in 用来遍历对象中的属性：

let nicknames2 = ['di', 'boo', 'punkeye'];
nicknames2.size = 3;
for (let nickname1 in nicknames2) {
  console.log(nickname1);
}
console.log(nicknames2);

