/*
Although the factory pattern is useful for creating like objects, it has two 
major drawbacks. First, there is no way to check whether a given object was 
created by a certain factory. We cannot, for example, say something like bender 
instanceof makeRobot to find out how bender was created. Second, the factory 
pattern does not share behaviors, rather, it simply creates new versions of a 
behavior every time it is called and adds them to the object being created. 
As a result, methods are repeated anew on every object created by the factory 
function, taking up valuable space. In a large program, this could prove 
extremely slow and wasteful.
*/
const counter = (name) => {
    const name = name;
    const count = 0
    return {
        add = function (number) {
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
    }
};
var MyCounter = counter('George');
MyCounter.getName();