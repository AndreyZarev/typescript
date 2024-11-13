import { Drink } from "./Drink"

export class VendingMachine {
    buttonCapacity: number
    drinks: Drink[] = []

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink)
            this.getCount = this.drinks.length;
        }

    }


    removeDrink(name: string) {
        let i = this.drinks.findIndex((drink) => drink.name === name)

        if (i !== -1) {
            this.drinks.splice(i, 1)
            return true;



        } else {


            return false;
        }

    }


    getLongest() {


        let sorted = this.drinks.slice().sort((a, b) => b.volume - a.volume)
        return sorted[0].toString(sorted[0].name, sorted[0].price, sorted[0].volume)

    }


    getCheapest() {
        let sorted = this.drinks.slice().sort((a, b) => a.price - b.price)

        return sorted[0].toString(sorted[0].name, sorted[0].price, sorted[0].volume)

    }
    buyDrink(name: string) {
        let i = this.drinks.findIndex((drink) => drink.name === name)
        return this.drinks[i].toString(this.drinks[i].name, this.drinks[i].price, this.drinks[i].volume)

    }

    report() {
        let result: string = "Drinks available:\n"
        for (let index = 0; index < this.drinks.length; index++) {
            const element = this.drinks[index];
            result += element.toString(this.drinks[index].name, this.drinks[index].price, this.drinks[index].volume) + "\n"

        }
        return result
    }
    public getCount = this.drinks.length

}


