function evenPossitions(arr: Array<string>) {
    let sum = 0
    for (let index = 0; index <= arr.length; index++) {
        if (index % 2 !== 0) {
            let element = Number(arr[index])
            sum += element
        }

    }
    console.log(sum);

    return sum

}
evenPossitions(["20", "30", "40", "50", "60"]);
evenPossitions(["-8", "20"]);
