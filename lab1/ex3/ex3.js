function sumBetween(num1, num2) {
    let sum = 0;
    let num1N = Number(num1);
    let num2N = Number(num2);
    for (let index = num1N; index <= num2N; index++) {
        let value = index;
        sum += value;
    }
    console.log(sum);
    return sum;
}
sumBetween("1", "5");
sumBetween("-8", "20");
