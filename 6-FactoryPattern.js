/*
In JavaScript, any function can create an object. When that function is not a constructor or `class`, 
is called factory function. they are simply functions that create objects, but thanks to the 
advantage of closures, offer the ability to produce easily instances of objects without immersing 
themselves in the complexities of classes. In JavaScript you can use factory instead of using 
classes, since they are basically more simple than classes and easier to reason. 
Advantages of Factory Functions:
o	The properties and methods of a class object are public, when factory is used functions only the 
    methods we expose are public, everything else is encapsulated.
o	In JavaScript the this keyword works differently and using classes you have the problem If you 
    lose the context of this for example, this loses the context in nested functions. Not only is it 
    annoying during coding, but it is also a constant source of mistakes.
o	The keyword new must be used when creating objects using classes, but it is not necessary when 
    creating objects with factory functions.
*/

const counter = (name) => {
    let state = {
        name,
        count: 0
    }
    return {
        add: function (number) {
            state.count += number;
        },
        remove: function (number) {
            state.count -= number;
        },
        checkCount: function () {
            return state.count;
        },
        getName: function () {
            return state.name;
        }
    }
};

const counter2 = counter('George');
console.log(counter2.getName())  //George
counter2.add(2);
console.log(counter2.checkCount())  //2