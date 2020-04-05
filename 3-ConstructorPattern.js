/*
This pattern uses a “constructor function,” which is a normal JavaScript function that is called 
using the new keyword. By using the new keyword, we are telling JavaScript to execute the function 
and immediately will create a new object and return it. Also, it will set the context of "this" 
to the new object and any change made to the instances will only affect them and not the others.
*/

function counter(name) {
    this.name = name;
    this.count = 0
    this.add = function (number) {
        this.count += number;
    }
    this.remove = function (number) {
        this.count -= number;
    }
    this.checkCount = function () {
        return this.count;
    }
    this.getName = function () {
        return this.name;
    }
};

const counter2 = new counter('George');
console.log(counter2.getName())  //George
counter2.add(2);
console.log(counter2.checkCount())  //2

