var Car = /** @class */ (function () {
    // name: string, model: string, hp: number
    function Car() {
    }
    Object.defineProperty(Car.prototype, "getName", {
        get: function () { return this.name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getModel", {
        get: function () { return this.model; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getHp", {
        get: function () { return this.hp; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setName", {
        set: function (name) { this.name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setModel", {
        set: function (model) { this.model = model; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setHp", {
        set: function (hp) { this.hp = hp; },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car1 = new Car();
var car2 = new Car();
car1.setName = "Chevrolet";
car1.setModel = "Impala";
car1.setHp = 390;
car2.setName = "Skoda";
car2.setModel = "Karoq";
car2.setHp = 150;
console.log("The car is: ".concat(car1.getName, " ").concat(car1.getModel, " - ").concat(car1.getHp));
console.log("The car is: ".concat(car2.getName, " ").concat(car2.getModel, " - ").concat(car2.getHp));
// Chevrolet Impala 390
// The car is: Chevrolet Impala - 390 HP.
//
// The car is: This Skoda Karoq - 150 HP.
