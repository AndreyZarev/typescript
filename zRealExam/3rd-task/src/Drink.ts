export class Drink {

    name: string
    price: number
    volume: number

    constructor(name: string, price: number, volume: number) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
    toString(name: string,
        price: number,
        volume: number) {

        return `Name: ${this.name}, Price: ${this.price}, Volume: ${this.volume} ml`

    }



}
