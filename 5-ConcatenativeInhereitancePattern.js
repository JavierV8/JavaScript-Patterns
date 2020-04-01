const person = {
    gender: "male",
    hello: function () {
        return `Hello, my name is ${this.name} and I a ${this.gender}`;
    }
};
const mario = Object.assign({}, person, { name: 'Mario' });
const msg = george.hello();
console.log(msg); // Hello, my name is Mario and I a male