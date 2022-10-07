let getFinalPrice = (price, tax = 0.7) => {
    return price * tax + price
};

console.log(getFinalPrice(500)); // 850