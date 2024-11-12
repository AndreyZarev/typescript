class Town {
    cityName;
    population;
    treasury;
    taxRate;
    constructor(cityName, population, treasury, taxRate) {
        this.cityName = cityName;
        this.population = population;
        this.treasury = treasury;
        this.taxRate = taxRate;
    }
    collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate);
    }
    applyGrowth(percentage) {
        this.population += Math.floor((percentage / 100) * this.population);
    }
    applyRecession(percentage) {
        this.treasury -= Math.floor(this.treasury * (percentage / 100));
    }
}
function cityTaxes(cityName, population, treasury) {
    let taxRate = 10;
    let obj = new Town(cityName, population, treasury, taxRate);
    let final = {
        name: obj.cityName,
        population: obj.population,
        treasury: obj.treasury,
        taxRate: obj.taxRate,
        collectTaxes: obj.collectTaxes,
        applyGrowth: obj.applyGrowth,
        applyRecession: obj.applyRecession
    };
    return final;
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
//? {
//?     name: 'Tortuga',
//?     population: 7000,
//?     treasury: 15000,
//?     taxRate: 10,
//?     collectTaxes: [Function: collectTaxes],
//?     applyGrowth: [Function: applyGrowth],
//?     applyRecession: [Function: applyRecession]
//?   }
const city1 = cityTaxes('Tortuga', 7000, 15000);
city1.collectTaxes();
console.log(city1.treasury);
city1.applyGrowth(5);
console.log(city1.population);
//? 85000
//? 7350
