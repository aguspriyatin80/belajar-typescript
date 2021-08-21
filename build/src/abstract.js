"use strict";
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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.start = function () {
        console.log('broom');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return Car;
}(Vehicle));
var Motorcyle = /** @class */ (function (_super) {
    __extends(Motorcyle, _super);
    function Motorcyle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 2;
        return _this;
    }
    return Motorcyle;
}(Vehicle));
var car = new Car();
var motorcyle = new Motorcyle();
console.log(car.wheels);
console.log(motorcyle.wheels);
car.start();
motorcyle.start();
