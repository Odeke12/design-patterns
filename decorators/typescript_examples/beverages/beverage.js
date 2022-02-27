var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Espresso = /** @class */ (function () {
    function Espresso() {
    }
    Espresso.prototype.cost = function () {
        return 1;
    };
    return Espresso;
}());
var AddOnDecorator = /** @class */ (function () {
    function AddOnDecorator(beverage) {
        this.beverage = beverage;
    }
    AddOnDecorator.prototype.cost = function () {
        return this.beverage.cost();
    };
    return AddOnDecorator;
}());
var Caramel = /** @class */ (function (_super) {
    __extends(Caramel, _super);
    function Caramel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Caramel.prototype.cost = function () {
        return this.beverage.cost() + 2;
    };
    return Caramel;
}(AddOnDecorator));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Milk.prototype.cost = function () {
        return this.beverage.cost() + 3;
    };
    return Milk;
}(AddOnDecorator));
var espresso = new Espresso();
var caramel = new Caramel(espresso);
var milk = new Caramel(caramel);
console.log(milk.cost());
