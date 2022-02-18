import { product } from "./product";
import { operations } from "./operation";
import {productDetails} from "./product";
import {cartOperations} from "./operation";


productDetails.display();

let cart=[];
//add the item to cart
cartOperations.add(cart, productDetails)

console.log(cart);
//remove the item from the cart
cartOperations.remove(cart)

console.log(cart);