import { product } from "./product";

export class operations{

    add(array?:any[],_product?:product){
        array.push(_product)
    }
    remove(array?:any[]){
        array.splice(array.length-1,array.length)
        return array
    }
}

export let cartOperations = new operations()

   

