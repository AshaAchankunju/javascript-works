"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehiclecomponent_1 = require("./vehiclecomponent");
var Driver = /** @class */ (function () {
    function Driver(car, bike) {
        this.car = car;
        this.bike = bike;
        car.drive();
        bike.drive();
    }
    return Driver;
}());
var carInstance = new vehiclecomponent_1.Car();
var bikeinstance = new vehiclecomponent_1.Bike();
var driverinstance = new Driver(carInstance, bikeinstance);
