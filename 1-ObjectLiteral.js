/*
OBJECT LITERAL
Is the simplest way to create objects in JavaScript.
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

counter.state("George");
console.log(counter.getName())  //George
counter.add(2);
console.log(counter.checkCount())  //2