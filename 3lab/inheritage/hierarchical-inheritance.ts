class Animal {
    public eat = (): void => {
        console.log("eating…");

    }


}



class Dog extends Animal {
    public bark = () => {
        console.log("barking…");
    }
}

class Cat extends Animal {
    public meow = () => {
        console.log("meowing…");

    }
}


const dog = new Dog();
dog.eat()
dog.bark()

const cat = new Cat();
cat.eat()
cat.meow()


