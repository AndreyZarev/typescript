function inventory(arr: string[]) {

    let resultArray: Array<string[]> = [];
    for (let index = 0; index < arr.length; index++) {
        const [hero, level, items] = arr[index].split("/");
        let array = `${hero}/ ${level}/ ${items}`.split("/")
        // `Hero: ${hero}/ Level => ${level}/ Items => ${items}`.split("/")


        resultArray.push(array);

        // resultArray.push(`Hero: ${hero}`)
        // resultArray.push(`Level => ${level}`)
        // resultArray.push(`Items => ${items}`)


    }

    resultArray = resultArray.sort((a, b) => {
        const numA = parseInt(a[1].trim(), 10); // Trim and convert to number
        const numB = parseInt(b[1].trim(), 10);
        return numA - numB; // Sort in ascending order
    });

    for (let index = 0; index < resultArray.length; index++) {
        const elementArr = resultArray[index];

        for (let i = 0; i < elementArr.length; i++) {
            const element = elementArr[i];
            if (i === 0) {
                console.log(`Hero: ${element.trim()}`);

            } else if (i === 1) {
                console.log(`level => ${element.trim()}`);

            } else {
                console.log(`items => ${element.trim()}`);

            }
        }

    }

    // let final = resultArray.join(",").split(",");

    return resultArray
}





inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun
