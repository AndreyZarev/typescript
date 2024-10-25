export class Cloth {
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    toString() {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}
