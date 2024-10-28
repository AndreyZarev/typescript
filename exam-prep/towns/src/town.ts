function townPrice(townDetails:string[]): Object {
let unsorted = {};
let sorted2:object = {};;
let sorted1 = [];
let last = []
    for (let index = 0; index < townDetails.length; index++) {
        const [town, product, price] = townDetails[index].split(" | ");
       const sortedPrice = Number(price);
if (!unsorted.hasOwnProperty(product)){

    unsorted[product] = {} ;

} 
if(!unsorted[product].hasOwnProperty(town)){
   
    unsorted[product][town] = sortedPrice
   
}  else if( Number(unsorted[product][town]) > sortedPrice){

    unsorted[product][town] = sortedPrice
    }
 
        
    }
    
let values = Object.entries(unsorted)

    for (let [product, townPrice] of values) {
    
        
        //    console.log(JSON.stringify(townPrice, null, 4));

           sorted1.push(product)
           let townTuples = Object.entries(townPrice)
         
      sorted2 = townTuples.sort((a, b) =>{
        return a[1] - b[1]
      })
       
      const town = sorted2[0][0];
      const price = sorted2[0][1];
last.push(`${product} -> ${price} (${town})`);

    }

    return last.join('\n');
}



console.log(
    townPrice(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',
    
    'Sample Town | Peach | 1',
    
    'Sofia | Orange | 3',
    
    'Sofia | Peach | 2',
    
    'New York | Sample Product | 1000.1',
    
    'New York | Burger | 10'])
);


    // Sample Product -> 1000 (Sample Town) 
    // Orange -> 2 (Sample Town) 
    // Peach -> 1 (Sample Town) 
    // Burger -> 10 (New York





