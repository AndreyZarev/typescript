function colorieObj(foods: Array<string>): Object {

    let foodNames: { [key: string]: String } = {};

    for (let index = 0; index <= foods.length; index + 2) {



        foodNames[foods[index]] = foods[index + 1]

    }

    return foodNames
}


console.log(
    colorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
);
// { Yoghurt: 48, Rise: 138, Apple: 52 }
