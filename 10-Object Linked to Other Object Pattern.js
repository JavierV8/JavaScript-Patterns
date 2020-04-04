
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


const counter = {
    name = name,
    count = 0,
    add = function (number) {
        this.count += number;
    },
    remove = function (number) {
        this.count -= number;
    },
    checkCount = function () {
        return this.count;
    },
    getName = function () {
        return this.name;
    }
};

/*
Object.create and constructor function both create a new object and bot set the __proto__ but
in a different way.Object.create sets the __proto__ to be the one passed as the first parameter.
The constructor function set the __proto__ to the type specified prototype (in the previous
example MyClass1.prototype).The major difference is that Object.Create returns the new object
while the constructor function return the constructor of the object or the object.
*/