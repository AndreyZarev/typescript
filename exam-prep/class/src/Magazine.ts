import { Cloth } from "./Cloth"

export class Magazine {
  type: string

  capacity: number

  clothes: Cloth[] = []


  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity
  }
  addCloth(cloth: Cloth): void {
    if (this.capacity > this.clothes?.length) {
      this.clothes.push(cloth)
    } else {
      console.log("The capacity is already full...");

    }
  }



  removeCloth(color: string) {


    let i = this.clothes.findIndex((cloth) => cloth.color === color)

    if (i !== -1) {
      this.clothes.splice(i, 1)
      return true;



    } else {


      return false;
    }

  }



  getSmallestCloth() {

    if (this.clothes?.length === 0) {
      return {} as Cloth
    }

    if (this.clothes.length === 1) {
      return this.clothes[0]
    }

    let sorted = this.clothes.sort((a, b) => a.size - b.size)
    return sorted[0]

  }



  getCloth(color: string) {
    let select = this.clothes.findIndex((cloth) => cloth.color === color)
    return this.clothes[select]
  }

  getClothCount() {
    return this.clothes.length

  }



  report() {
    let sorted = this.clothes.sort((a, b) => a.size - b.size)
    let string = ""
    console.log(`${this.type} magazine contains:`)

    sorted.forEach((cloth) => string += `Product: ${cloth.type} with size ${cloth.size}, color ${cloth.color} \n`)



    return string
  }



}









