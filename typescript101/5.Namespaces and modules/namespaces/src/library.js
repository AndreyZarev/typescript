export var AnimalGroup;
(function (AnimalGroup) {
    AnimalGroup.x = 123;
    function z() { }
    AnimalGroup.z = z;
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    AnimalGroup.Animal = Animal;
})(AnimalGroup || (AnimalGroup = {}));
export var StudentsGroup;
(function (StudentsGroup) {
    class Student {
        constructor(name) {
            this.name = name;
        }
    }
    StudentsGroup.Student = Student;
})(StudentsGroup || (StudentsGroup = {}));
// const animalGosho = new AnimalGroup.Animal("Gosho");
// console.log(animalGosho);
// import check = CarGroup.Engline.OilService.check;
