var num: number = 10
var i: number
var factorial = 1

for (i = num; i >= 1; i--) {
    factorial *= i
}

console.log(factorial)



// for ... in ...
console.log('---------------------');

var j:any;

var n:any = "abc"

for (j in n) {
    console.log(j)
    console.log(n[j])
}


// for ... of ...
console.log('---------------------');

let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

// forEach
console.log('---------------------');

let list3 = [4, 5, 6];
list3.forEach((val, index, array) => {
    console.log(val, index, array);
});

// every循环
console.log('---------------------');

let list4 = [4, 5, 6];
list4.every((val, index, array) => {
    console.log(val, index, array);
    return true;
     // val: 当前值
    // idx：当前index
    // array: Array
    // return true; // Continues
    // Return false will quit the iteration
});


// while
console.log('---------------------');

var n1: number = 10;
var f1: number = 0

while (n1 >= 1) {
    f1 += n1
    n1--
}

console.log(f1) // 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55


// do while
console.log('---------------------');

var n1: number = 10;
var f1: number = 0
do {
    f1 += n1
    n1--
}while(n1 >= 1)

console.log(f1)