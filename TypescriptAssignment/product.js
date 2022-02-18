"use strict";
exports.__esModule = true;
exports.productDetails = exports.product = void 0;
var product = /** @class */ (function () {
    function product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    product.prototype.display = function () {
        console.log("product id is: ".concat(this.id, " for the product name: ").concat(this.name, " with price amount: ").concat(this.price));
    };
    return product;
}());
exports.product = product;
exports.productDetails = new product(1, 'Pen', 125);
