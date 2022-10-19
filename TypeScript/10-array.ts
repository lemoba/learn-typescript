var site: string[];

site = ["Runoob", "Google", "Taobao"];

console.log(site)
console.log(site[0])
console.log(site[1])


var numList: number[] = [1, 2, 3, 4, 5];
console.log(numList)

// Array 对象

var arr_names: number[] = new Array(4) // 定义长度为4的数组

for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i]);
}

var site1: string[] = new Array("Runoob", "Google", "Taobao")

for (var i = 0; i < site1.length; i++) {
    console.log(site1[i]);
}

// 数组解构
var arr: number[] = [11, 12]

var[xx, yy] = arr;
console.log(xx)
console.log(yy)


// 数组迭代
var j: any
var nums: number[] = [1001, 1002, 1003, 1004]

for (j in nums) {
    console.log(nums[j])
}

// 多维数组

var multi: number[][] =[[1,2,3],[23,24,25]]

console.log(multi[0][0]) 
console.log(multi[0][1]) 
console.log(multi[0][2]) 
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2])


// for (var ii = 0; ii < multi.length; ii++) {
//     for (var jj = 0; jj < multi[ii].length; jj++) {
//         console.log(multi[ii][jj]);
//     }
// }


// 数组在函数中的使用
var site3: string[] = new Array("Runoob", "Google", "Taobao")

function disp5(arr_names: string[]) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(arr_names[i]);
    }
}

disp5(site3)


function disp6(): string[] {
    return new Array("Runoob", "Google", "Taobao")
}


var site4: string[] = disp6()

for(var v1 in site4) {
    console.log(site4[v1])
}
