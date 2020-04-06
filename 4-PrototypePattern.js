/*
Create objects in the same way Constructor pattern does, but methods of the object are created by 
using prototypal delegation, so all instances objects will point to the same methods instead of creating their 
own individual copies. This way avoids to replicate the methods in all instances making the code 
more efficient.
*/

function counter(name) {
    this.name = name;
    this.count = 0
};
counter.prototype = {
    add: function (number) {
        return this.count += number;
    },
    checkCount: function () {
        return this.count;
    },
    getName: function () {
        return this.name;
    }
};

const counter2 = new counter('George');
console.log(counter2.getName())  //George


/*
Another way of inherit properties and methods from another object using prototypal delegation.
*/

function Vehicle(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
Vehicle.prototype = {
    start: function () {
        return "VROOM!"
    },
    VehicleInfo: function () {
        return `The brand, model, and year are ${this.brand} ${this.model} ${this.year}`;
    }
};

function Car(brand, model, year) {
    Vehicle.call(this, brand, model, year);
    this.numWheels = 4;
    this.startRadio = () => {
        return `you are listening the radio on your ${this.numWheels} wheels car`
    }
}
Car.prototype = new Vehicle();

function Motorcycle(brand, model, year) {
    Vehicle.call(this, brand, model, year);
    this.numWheels = 2;
    this.makeWheelie = () => {
        return `you are making a wheelie with your ${this.numWheels} wheels motorcycle!`
    }
}
Motorcycle.prototype = new Vehicle();


var MyCar = new Car("volkswagen", "polo", "2018", 4);
console.log(MyCar.VehicleInfo())
console.log(MyCar.startRadio())

var MyMotorcycle = new Motorcycle("Honda", "CBR600RR", "2019", 2);
console.log(MyMotorcycle.VehicleInfo());
console.log(MyMotorcycle.makeWheelie());