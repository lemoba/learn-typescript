function getCar(make, model, value) {
    return {
        make,
        model,
        value,

        ['make' + make]: true,

        depreciate() {
            this.value -= 2500;
        }
    };
}

let car = getCar('Barret', 'Lee', 40000);

console.log(car);