function evenPossitions(arr: Array<string>) {
    let sum: number = 0;
    let num1N = Number(num1)
    let num2N = Number(num2)
    for (let index = num1N; index <= num2N; index++) {
        let value = index
        sum += value


    }
    console.log(sum);

    return sum

}
evenPossitions(["20", "30", "40", "50", "60"]);
evenPossitions(["-8", "20"]);
