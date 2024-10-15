class Person1 {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

}


const person = new Person1("Peter", 12)
console.log(`${person.name} is ${person.age} years old.`);

// Peter 12
// Peter is 12 years old.
