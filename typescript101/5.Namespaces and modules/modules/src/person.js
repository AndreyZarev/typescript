export default class Person {
    constructor(name, age) {
        this.name;
        this.age = age;
        this.favouriteTvShow = "Simpsons";
    }
    getDetails() {
        return this.name + " <> " + this.age;
    }
}
