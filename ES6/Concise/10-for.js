// for...of VS for...in

// 1. for...of[遍历值] 用于遍历一个迭代器，如数组：
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;

for (let nickname of nicknames) {
    console.log(nickname); // di, boo, punkeye
}

// 2. for...in[遍历键] 用来遍历对象中的属性：
let nicknames2 = ['di', 'boo', 'punkeye'];
nicknames2.size = 3;
for (let nickname1 in nicknames2) {
  console.log(nickname1); // 0 1 2 size
}
console.log(nicknames2); // [ 'di', 'boo', 'punkeye', size: 3 ]

