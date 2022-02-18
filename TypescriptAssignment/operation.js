"use strict";
exports.__esModule = true;
exports.cartOperations = exports.operations = void 0;
var operations = /** @class */ (function () {
    function operations() {
    }
    operations.prototype.add = function (array, _product) {
        array.push(_product);
    };
    operations.prototype.remove = function (array) {
        array.splice(array.length - 1, array.length);
        return array;
    };
    return operations;
}());
exports.operations = operations;
exports.cartOperations = new operations();
