function printNum(num1, num2) {
    let sum = 0;
    let str = "";
    for (let index = num1; index <= num2; index++) {
        str += index + " ";
        sum += index;
    }
    let result = `${str.trim()}\nSum: ${sum}`;
    return result;
}
console.log(printNum(5, 10));
//5 6 7 8 9 10
//Sum: 45
console.log(printNum(0, 26));
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 
//Sum: 351
console.log(printNum(50, 60));
//50 51 52 53 54 55 56 57 58 59 60
//Sum: 605
