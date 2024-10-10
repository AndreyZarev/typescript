function persons(firstName, lastName, age) {
    var obj = {};
    obj["firstName"] = firstName;
    obj["lastName"] = lastName;
    obj["age"] = age;
    return obj;
}
console.log(persons("Peter", "Pan", "20"));
// firstName: Peter lastName: Pan age: 20
console.log(persons("Peter", "Pan", "20"));
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
