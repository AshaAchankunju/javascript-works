"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("car driving");
    };
    return Car;
}());
exports.Car = Car;
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.drive = function () {
        console.log("bike driving");
    };
    return Bike;
}());
exports.Bike = Bike;
