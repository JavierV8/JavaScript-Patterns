/*
With the arrival of ES6, classes were introduced, another way to create objects. But it is just a 
syntactic sugar, JavaScript is dynamic and does not provide a class implementation, Under the hood 
JavaScript classes remains on prototype pattern. So, this syntax was introduces to make the code 
more simpler and understandable.
*/
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