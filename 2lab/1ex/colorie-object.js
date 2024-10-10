function colorieObj(foods) {
    var foodNames = {};
    for (var index = 0; index <= foods.length; index = index + 2) {
        if (foods.length <= index) {
            return foodNames;
        }
        var num = Number(foods[index + 1]);
        foodNames[foods[index]] = num;
    }
    return foodNames;
}
console.log(colorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// { Yoghurt: 48, Rise: 138, Apple: 52 }
console.log(colorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
