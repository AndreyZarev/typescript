function math1(sum: number, years: number, interest: number, payment: number): string {
    let result: number = sum;

    for (let index = 0; index < years; index++) {


        let reducedSum: number = sum - 12 * payment;
        let interestSum = (sum * interest)

        sum = reducedSum
        result += interestSum;




    }

    return result.toFixed(2);
}


console.log(
    math1(42000, 7, 0.0444, 603.65)
);