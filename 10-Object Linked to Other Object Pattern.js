const Vehicle = {
    init: function (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    },
    create: function (values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    },
    start: function () {
        return "VROOM!"
    },
    VehicleInfo: function () {
        return `The brand, model, and year are ${this.brand} ${this.model} ${this.year}`;
    }
}

var car = Vehicle.create({
    numWheels: 4,
    startRadio: function () {
        return `you are listening the radio on your ${this.numWheels} wheels car`
    }
})
var Motorcycle = Vehicle.create({
    numWheels: 2,
    makeWheelie: function () {
        return `you are making a wheelie with your ${this.numWheels} wheels motorcycle!`
    }
})

var MyCar = car.create({});
MyCar.init("volkswagen", "polo", "2018")
console.log(MyCar.VehicleInfo())
console.log(MyCar.startRadio())

var MyMotorcycle = Motorcycle.create({});
MyMotorcycle.init("Honda", "CBR600RR", "2019")
console.log(MyMotorcycle.VehicleInfo())
console.log(MyMotorcycle.makeWheelie())

