export class product{
    id: number;
    name: string;
    price: number;

    constructor(id?:number,name?:string,price?:number){
        this.id = id;
        this.name=name;
        this.price=price;
    }

    display(){
        console.log(`product id is: ${this.id} for the product name: ${this.name} with price amount: ${this.price}`)
    }
}

export let productDetails = new product(1,'Pen',125)

