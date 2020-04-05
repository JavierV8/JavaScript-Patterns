/*
Create objects in the same way Constructor pattern does, but methods of the object are created by 
using prototypal, so all instances objects will point to the same methods instead of creating their 
own individual copies. This way avoids to replicate the methods in all instances making the code 
more efficient.
    •	Whit new constructor, it will create a new instance of everything and any change made to the 
        instances will only affect them and not others.
    •	Whit prototype it will reuse the logic and any change to the prototype chain will affect 
        everyone else.
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