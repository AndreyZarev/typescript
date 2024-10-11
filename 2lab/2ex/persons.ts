function persons(firstName: string, lastName: string, age: string): object {
    let obj: { [key: string]: string } = {};

    obj["firstName"] = firstName
    obj["lastName"] = lastName
    obj["age"] = age
    Object.(persons).forEach(key => {
        console.log();

    });
    return obj
}


console.log(
    persons("Peter", "Pan", "20")
);
// firstName: Peter lastName: Pan age: 20
console.log(

    persons("Peter", "Pan", "20")
);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
