class Animal {
    constructor() {
        this.eat = () => {
            console.log("eating…");
        };
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.bark = () => {
            console.log("barking…");
        };
    }
}
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.meow = () => {
            console.log("meowing…");
        };
    }
}
const dog = new Dog();
dog.eat();
dog.bark();
const cat = new Cat();
cat.eat();
cat.meow();
