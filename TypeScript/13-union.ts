//联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
//注意：只能赋值指定的类型，如果赋值其它类型就会报错。


var val: string | number;

val = 111

console.log("数字：" + val)

val = "hello"

console.log("字符串：" + val)


// 也可以将联合类型作为函数参数使用：

function disp6(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}

disp6("Runoob")
disp6(["Runoob", "Google", "Taobao"])

// 联合类型数组
var arr_union: number[] | string[];
var i: number
arr_union = [1, 2, 4]
console.log("**数字数组**")  
 
for(i = 0;i<arr_union.length;i++) { 
   console.log(arr_union[i]) 
}  

arr_union = ["Runoob","Google","Taobao"] 
console.log("**字符串数组**")  
 
for(i = 0;i<arr_union.length;i++) { 
   console.log(arr_union[i]) 
}