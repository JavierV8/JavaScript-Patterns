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
var MyCounter = new counter('George');
MyCounter.getName();