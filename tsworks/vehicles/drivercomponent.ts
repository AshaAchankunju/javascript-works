import {Car,Bike} from "./vehiclecomponent"

class Driver{
    constructor(private car:Car, private bike:Bike){
        car.drive()
        bike.drive()
    }
}
var carInstance=new Car()
var bikeinstance=new Bike()
var driverinstance=new Driver(carInstance,bikeinstance)