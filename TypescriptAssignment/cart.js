"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var operation_1 = require("./operation");
product_1.productDetails.display();
var cart = [];
//add the item to cart
operation_1.cartOperations.add(cart, product_1.productDetails);
console.log(cart);
//remove the item from the cart
operation_1.cartOperations.remove(cart);
console.log(cart);
