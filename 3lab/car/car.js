class Car {
    // name: string, model: string, hp: number
    constructor() {
    }
    get getName() { return this.name; }
    get getModel() { return this.model; }
    get getHp() { return this.hp; }
    set setName(name) { this.name = name; }
    set setModel(model) { this.model = model; }
    set setHp(hp) { this.hp = hp; }
}
const car1 = new Car();
const car2 = new Car();
car1.setName = "Chevrolet";
car1.setModel = "Impala";
car1.setHp = 390;
car2.setName = "Skoda";
car2.setModel = "Karoq";
car2.setHp = 150;
console.log(`The car is: ${car1.getName} ${car1.getModel} - ${car1.getHp}.`);
console.log(`The car is: ${car2.getName} ${car2.getModel} - ${car2.getHp}.`);
// Chevrolet Impala 390
// The car is: Chevrolet Impala - 390 HP.
//
// The car is: This Skoda Karoq - 150 HP.
