var getPrice = function() {
    return 1.1;
};

console.log(getPrice());

var getPrice1 = () => 1.2;

console.log(getPrice1());


let arr = ['apple', 'orange', 'banana']

let breakfast = arr.map(fruit => {
    return fruit + 's';
});

console.log(breakfast);


function Person() {
    this.age = 0;
    setInterval(function growUp() {
        this.age++;
    }, 1000);

    // setInterval(() => {
    // |this|指向person对象
    //     this.age++;
    // }, 1000);
}

var person = new Person();


