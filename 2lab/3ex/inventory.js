function inventory(arr) {
    var resultArray = [];
    for (var index = 0; index < arr.length; index++) {
        var _a = arr[index].split("/"), hero = _a[0], level = _a[1], items = _a[2];
        var array = "".concat(hero, "/ ").concat(level, "/ ").concat(items).split("/");
        // `Hero: ${hero}/ Level => ${level}/ Items => ${items}`.split("/")
        resultArray.push(array);
        // resultArray.push(`Hero: ${hero}`)
        // resultArray.push(`Level => ${level}`)
        // resultArray.push(`Items => ${items}`)
    }
    resultArray = resultArray.sort(function (a, b) {
        var numA = parseInt(a[1].trim(), 10); // Trim and convert to number
        var numB = parseInt(b[1].trim(), 10);
        return numA - numB; // Sort in ascending order
    });
    for (var index = 0; index < resultArray.length; index++) {
        var elementArr = resultArray[index];
        for (var i = 0; i < elementArr.length; i++) {
            var element = elementArr[i];
            if (i === 0) {
                console.log("Hero: ".concat(element.trim()));
            }
            else if (i === 1) {
                console.log("level => ".concat(element.trim()));
            }
            else {
                console.log("items => ".concat(element.trim()));
            }
        }
    }
    // let final = resultArray.join(",").split(",");
    return resultArray;
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun
