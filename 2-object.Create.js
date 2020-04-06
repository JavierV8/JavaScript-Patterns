/*
OBJECT.CREATE PATTERN
Object.create() is a JavaScript method that allow to create a new object with the prototype set from
other object.
*/

const counter = {
    state: function (name) {
        this.name = name;
        this.count = 0;
    },
    add: function (number) {
        this.count += number;
    },
    remove: function (number) {
        this.count -= number;
    },
    checkCount: function () {
        return this.count;
    },
    getName: function () {
        return this.name;
    }
};

const counter2 = Object.create(counter)
counter2.state("George");
console.log(counter2.getName())  //George
counter2.add(2);
console.log(counter2.checkCount())  //2


/*
Now in this example a create funcion inside the vehicule Object gives the avility to inherit properties from this Object.
when the function is call takes an object as an argument and it create a brand new object with the proprties of the object passed and the 
prototype set from the vehicule object. One way to use Prototypal delegation.
*/

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