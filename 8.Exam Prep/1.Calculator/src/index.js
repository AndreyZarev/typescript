//   type MapType = Record<string, number>;
function solve(first, operator, second) {
    let result = 0;
    //   switch (operator) {
    //     case "+":
    //       result = first + second;
    //       break;
    //     case "-":
    //       result = first - second;
    //       break;
    //     case "/":
    //       result = first / second;
    //       break;
    //     case "*":
    //       result = first * second;
    //       break;
    //   }
    const CalculatorMap = {
        "+": first + second,
        "-": first - second,
        "/": first / second,
        "*": first * second,
    };
    result = CalculatorMap[operator];
    return result.toFixed(2);
}
console.log(solve(25, "/", 3));
