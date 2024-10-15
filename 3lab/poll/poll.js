var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var person = new Person1("Peter", 12);
console.log("".concat(person.name, " is ").concat(person.age, " years old."));
// Peter 12
// Peter is 12 years old.
