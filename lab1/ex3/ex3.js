function sumBetween(num1, num2) {
    var sum = 0;
    var num1N = Number(num1);
    var num2N = Number(num2);
    for (var index = num1N; index <= num2N; index++) {
        var value = index;
        sum += value;
    }
    console.log(sum);
}
sumBetween("1", "5");
sumBetween("-8", "20");
