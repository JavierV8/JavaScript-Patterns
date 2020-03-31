function counter(name) {
    this.name = name;
    this.count = 0;
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