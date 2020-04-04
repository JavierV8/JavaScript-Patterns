/*
In this pattern, we use a “constructor function,” which is really just a regular 
function that is called using the new keyword. By using the new keyword we are 
telling JavaScript to execute the function in a special fashion, and four key 
things will happen:
The function will immediately create a new object.
The function execution context (this) will be set as the new object.
The function code will execute within the new object’s execution context.
The function will implicitly return the new object, absent some other explicit 
return.
To create an object using the ‘new’ keyword, you need to have a constructor function. It will 
create a new instance of everything and importantly any change made to the instances will only 
affect them and not the others.

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
var MyCounter = new counter('George');
MyCounter.getName();

