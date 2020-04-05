//We should always use the class and extends keywords to create and inherit objects.
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
console.log(MyMotorcycle.VehicleInfo())
console.log(MyMotorcycle.makeWheelie())


