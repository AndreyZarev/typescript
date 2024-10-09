function colorieObj(foods) {
    var foodNames = {};
    var element = [];
    var i = 0;
    for (var index = 0; index < foods.length; index++) {
        if (index % 2 === 0) {
            element[i] = foods[index];
            foodNames[foods[index]] = "";
        }
        else {
            var food = element[i - 1];
            foodNames.key = foods[index - 1];
        }
    }
    return foodNames;
}
console.log(colorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// { Yoghurt: 48, Rise: 138, Apple: 52 }
