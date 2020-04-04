class counter {
    constructor(name) {
        this.name = name
        this.count = 0
    }
    add = function (number) {
        this.count += number;
    }
    remove = function (number) {
        this.count -= number;
    }
    checkCount = function () {
        return this.count;
    }
    getName = function () {
        return this.name;
    }
};

const counter2 = new counter('George');
console.log(counter2.getName())  //George
counter2.add(2);
console.log(counter2.checkCount())  //2