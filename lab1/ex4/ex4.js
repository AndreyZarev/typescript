function evenPossitions(arr) {
    var sum = "";
    for (var index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            var element = arr[index];
            sum += element + " ";
        }
    }
    sum = sum.trim();
    console.log(sum);
    return sum;
}
evenPossitions(["20", "30", "40", "50", "60"]);
evenPossitions(["-8", "20"]);
