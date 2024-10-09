function colorieObj(foods: Array<string>): Object {

    let foodNames: { [key: string]: String } = {};
    let element: String[] = [];
    let i = 0
    for (let index = 0; index <= foods.length; index++) {

        if (index % 2 === 0) {
            element[i] = foods[index]
            foodNames[foods[index]] = foods[index + 1]
        } else {
            let food = element[i - 1]
            foodNames.key = foods[index - 1]
        }
    }

    return foodNames
}


console.log(
    colorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
);
// { Yoghurt: 48, Rise: 138, Apple: 52 }
