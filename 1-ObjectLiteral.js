//This is the simplest and most popular way to create objects in JavaScript.

const counter = {
    name = name,
    count = 0,
    add = function (number) {
        this.count += number;
    },
    remove = function (number) {
        this.count -= number;
    },
    checkCount = function () {
        return this.count;
    },
    getName = function () {
        return this.name;
    }
};