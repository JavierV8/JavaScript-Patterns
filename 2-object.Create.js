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

