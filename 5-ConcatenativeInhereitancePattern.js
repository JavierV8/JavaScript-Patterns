const person = {
    gender: "male",
    hello: function () {
        return `Hello, my name is ${this.name} and I a ${this.gender}`;
    }
};
const mario = Object.assign({}, person, { name: 'Mario', shout: function () { return alert("aaaaaahhh!!"); } });
const msg = mario.hello();
console.log(msg); // Hello, my name is Mario and I a male
console.log(mario.shout())