var a = 2;

{
    let a = 3;
    console.log(a); // 3
}

console.log(a); // 2


{
    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR); // [5, 6, 7]
    // ARR = 10; // TypeError
}