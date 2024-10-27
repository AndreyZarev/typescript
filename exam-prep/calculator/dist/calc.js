function calco(a, x, b) {
    let result = 0;
    if (x === "+") {
        result = a + b;
    }
    else if (x === "-") {
        result = a - b;
    }
    else if (x === "/") {
        result = a / b;
    }
    else if (x === "*") {
        result = a * b;
    }
    return result.toFixed(2);
}
console.log(calco(5, "+", 10)); // 15.00
console.log(calco(25.5, "-", 3)); // 22.50
console.log(calco(9, "/", 2)); //4.50
console.log(calco(7, "*", 5)); // 35
