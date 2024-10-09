function colorieObj(foods) {
    var foodNames = {};
    for (var index = 0; index <= foods.length; index + 2) {
        foodNames[foods[index]] = foods[index + 1];
    }
    return foodNames;
}
console.log(colorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// { Yoghurt: 48, Rise: 138, Apple: 52 }
