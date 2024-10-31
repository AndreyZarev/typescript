import { AnimalGroup } from "./library";
export var CarGroup;
(function (CarGroup) {
    class Car {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
    }
    CarGroup.Car = Car;
    let Engline;
    (function (Engline) {
        let OilService;
        (function (OilService) {
            OilService.check = true;
        })(OilService = Engline.OilService || (Engline.OilService = {}));
    })(Engline = CarGroup.Engline || (CarGroup.Engline = {}));
})(CarGroup || (CarGroup = {}));
/// <reference path="library.ts"/>
const animal1 = new AnimalGroup.Animal("xxxx");
const bmw = new CarGroup.Car("BMW", "1999");
