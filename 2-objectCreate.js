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
Object.create and constructor function both create a new object and bot set the __proto__ but
in a different way.Object.create sets the __proto__ to be the one passed as the first parameter.
The constructor function set the __proto__ to the type specified prototype (in the previous
example MyClass1.prototype).The major difference is that Object.Create returns the new object
while the constructor function return the constructor of the object or the object.
*/
