function persons(firstName, lastName, age) {
    let obj = {};
    obj["firstName"] = firstName;
    obj["lastName"] = lastName;
    obj["age"] = age;
    Object.(persons).forEach(key => {
        console.log();
    });
    return obj;
}
console.log(persons("Peter", "Pan", "20"));
// firstName: Peter lastName: Pan age: 20
console.log(persons("Peter", "Pan", "20"));
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
