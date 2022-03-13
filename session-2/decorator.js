var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ValidationType;
(function (ValidationType) {
    ValidationType[ValidationType["NotNull"] = 0] = "NotNull";
})(ValidationType || (ValidationType = {}));
function validate() {
    var types = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        types[_i] = arguments[_i];
    }
    return function test(target, propertyKey) {
        Validator2.registerValidator(target, propertyKey, types);
    };
}
var Validator2 = /** @class */ (function () {
    function Validator2() {
    }
    Validator2.registerValidator = function (target, property, types) {
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type = types_1[_i];
            if (type == ValidationType.NotNull) {
                var keys = this.notNullValidatorMap.get(target);
                if (!keys) {
                    keys = [];
                    this.notNullValidatorMap.set(target, keys);
                }
                keys.push(property);
            }
        }
    };
    Validator2.validate = function (target) {
        var notNullProps = this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if (!notNullProps) {
            return true;
        }
        else {
            var hasErrors = false;
            for (var _i = 0, notNullProps_1 = notNullProps; _i < notNullProps_1.length; _i++) {
                var property = notNullProps_1[_i];
                var value = target[property];
                if (!value) {
                    console.log("value cannot be null");
                    hasErrors = true;
                }
            }
            if (hasErrors)
                return false;
            else
                return true;
        }
    };
    Validator2.notNullValidatorMap = new Map();
    return Validator2;
}());
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    __decorate([
        validate(ValidationType.NotNull)
    ], Person2.prototype, "name");
    return Person2;
}());
console.log("--create Instance to check decorators----");
var user1 = new Person2(null);
console.log(user1);
var pass = Validator2.validate(user1);
console.log("Validation passes " + pass);
console.log("--create another Instance to check decorators----");
var user2 = new Person2("Shruti");
console.log(user2);
var pass1 = Validator2.validate(user2);
console.log("Validation passes " + pass1);
