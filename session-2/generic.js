var GenericMap = /** @class */ (function () {
    function GenericMap() {
        this.items = {};
    }
    GenericMap.prototype.setItem = function (key, item) {
        this.items[key] = item;
    };
    GenericMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    GenericMap.prototype.printMap = function () {
        var _this = this;
        var itemAsString = Object.getOwnPropertyNames(this.items)
            .map(function (key) { return key + ":" + _this.getItem(key); })
            .join(", ");
        return itemAsString;
    };
    return GenericMap;
}());
var numb = new GenericMap();
numb.setItem('alpha', 5);
numb.setItem('beta', 15);
console.log(numb.printMap());
var strMap = new GenericMap();
strMap.setItem('color', 'blue');
strMap.setItem('height', '54 cm');
console.log(strMap.printMap());
