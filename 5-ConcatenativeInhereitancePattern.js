/*
Concatenative inheritance is the process of combining the properties of one or more 
source objects into a new destination object without retaining a reference between the two objects. 
Believe it or not, it is the most commonly used form of inheritance in JavaScript.

One major drawback to delegation is that it’s not very good for storing state. If you try to store 
state as objects or arrays, mutating any member of the object or array will mutate the member for 
every instance that shares the prototype. In order to preserve instance safety, you need to make a 
copy of the state for each object.
*/
const person = {
    speak: function () {
        return `Hello, my name is ${this.name} and I a ${this.gender}`;
    },
    walk: function () {
        return `I am walking`;
    }
};
const cyclist = {
    reading: function () {
        return `Hello, I am ridding my ${this.bike}`;
    }
};
const paul = Object.assign({}, person, cyclist, { name: 'paul', gender: 'male', bike: 'pinarello dogma' })
console.log(paul.speak());
console.log(paul.walk());
console.log(paul.reading());