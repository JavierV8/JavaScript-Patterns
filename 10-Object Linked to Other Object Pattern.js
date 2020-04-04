const Vehicle = {
    engeen: true,
    init: function (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    },
    start: function () {
        return "VROOM!"
    },
    VehicleInfo: function () {
        return `The brand, model, and year are ${this.brand} ${this.model} ${this.year}`;
    }
}/*
Vehicle.prototype = {
    start: function () {
        return "VROOM!"
    },
    VehicleInfo: function () {
        return `The brand, model, and year are ${this.brand} ${this.model} ${this.year}`;
    }
};*/

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

var MyCar = Car.create("volkswagen", "polo", "2018", 4);
console.log(MyCar.VehicleInfo())
console.log(MyCar.startRadio())

var MyMotorcycle = new Motorcycle("Honda", "CBR600RR", "2019", 2);
console.log(MyMotorcycle.VehicleInfo())
console.log(MyMotorcycle.makeWheelie())




//-----------------------------------------------------------------

const human = {
    species: "human",
    create: function (values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    },
    saySpecies: function () {
        console.log(this.species);
    },
    sayName: function () {
        console.log(this.name);
    }
};

var musician = human.create({
    species: "musician",
    playInstrument: function () {
        console.log("plays " + this.instrument);
    }
});
var will = musician.create({
    name: "Will",
    instrument: "drums"
});
will.playInstrument(); // plays drums
will.sayName(); //will

