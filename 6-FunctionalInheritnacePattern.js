/*
Functional inheritance makes use of a factory function, and then tacks on new properties using 
concatenative inheritance. The primary advantage of using functions for extension is that it 
allows you to use the function closure to encapsulate private data. In other words, you can 
enforce private state.
*/

const ridingBike = (state) => ({
    ride: (bike) => {
        console.log(`${state.name} is riding his ${bike}!`);
        state.energy--;
    }
})
const drivingCar = (state) => ({
    drive: (car) => {
        console.log(`${state.name} is driving a ${car}`);
        state.oil--;
    }
})

const cyclist = (name) => {
    let state = {
        name,
        energy: 100
    }
    return Object.assign(state, ridingBike(state));
}

const pilot = (name) => {
    let state = {
        name,
        oil: 100
    }
    return Object.assign(state, canCast(state));
}

const indurain = cyclist('Miguel Indurain')
indurain.ride('pinarello dogma');  // Miguel Indurain is riding his pinarello dogma
console.log(indurain.energy)      // 99

const schumacher = pilot('michael schumacher')
schumacher.drive('ferrari');      // michael schumacher is driving a ferrari
console.log(schumacher.oil)       // 99