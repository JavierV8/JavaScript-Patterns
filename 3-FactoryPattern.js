const dog = (dogName) => {
    const name = dogName
    const sound = 'woof'
    return {
        barking: () => console.log(sound),
        getName: function () { console.log(name); },
    }
}
const sniffles = dog("dock");
sniffles.barking() // Outputs: "woof"
sniffles.getName(); // Outputs: "dock"