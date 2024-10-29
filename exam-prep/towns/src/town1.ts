type townPrice = {
    [town2: string]: number;
}
type productI = Array<object | number>


function unsortedObj(strArray: string[]): productI {



    // let final: productI = {}
    let unsorted: Array<object | number> = []
    for (let i = 0; i < strArray.length; i++) {
        let [town, product, price] = strArray[i].split(' | ');
        let numberPrice = Number(price);

        if (!unsorted[product]) {
            unsorted[product] = {}
        }

        if (!unsorted[product][town]) {
            unsorted[product][town] = numberPrice
        }

    }



    return unsorted
}

function sortedObj(unsorted: productI): productI {
    let tuple = Object.entries(unsorted)
    let sorted: productI[] = []
    for (let [product, townPrice] of tuple) {

        let multiple = Object.entries(townPrice)
        sorted = multiple.sort((a, b) => a[1] - b[1]);
        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);

    }
    return sorted


}



sortedObj(unsortedObj(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']));


//? Sample Product -> 1000(Sample Town)
//? Orange -> 2(Sample Town)
//? Peach -> 1(Sample Town)
//? Burger -> 10(New York)