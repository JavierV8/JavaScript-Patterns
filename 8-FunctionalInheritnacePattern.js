/*
Functional inheritance gives the possibility to combine 2 or more function into a new one using 
concatenative inheritance. The main advantage of using function inheritance for extends functionality 
is that it allows you to use the function closure to encapsulate private data.
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