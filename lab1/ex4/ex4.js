function evenPossitions(arr) {
    let sum = "";
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            let element = arr[index];
            sum += element + " ";
        }
    }
    sum = sum.trim();
    console.log(sum);
    return sum;
}
evenPossitions(["20", "30", "40", "50", "60"]);
evenPossitions(["-8", "20"]);
