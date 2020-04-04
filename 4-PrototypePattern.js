/*
When you create a new object using the prototype it will reuse the logic and any change to the 
prototype chain will affect everyone else.
*/
function counter(name) {
    this.name = name;
    this.count = 0
};
counter.prototype = {
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

const counter2 = new counter('George');
console.log(counter2.getName())  //George
counter2.add(2);
console.log(counter2.checkCount())  //2