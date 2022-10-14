// 只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递。

function fn(name, age = 17) {
    console.log(name+','+age)
}

fn('Amy', 18); // Amy,18
fn('Amy'); // Amy,17
fn('Amy', ""); // Amy,


// 不定参数
function fn2(...values) {
    console.log(values.length)
}

fn2(1,2); // 2
fn2(1,2,3,4) // 4