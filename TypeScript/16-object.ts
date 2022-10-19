// 对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等，如下实例：

var object_name = {
    key1: "values1",
    key2: "value2",
    key3: function() {

    },
    key4: [1, 2, 3, 4]
}


var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function() {} // 类型模版
}

console.log(sites.site1)
console.log(sites.site2)

// 类型模版
sites.sayHello = function() {
    console.log("hello " + sites.site1);
}

sites.sayHello();