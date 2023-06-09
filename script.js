//complete this code
class Animal {
    _species;
    constructor(species){
        this._species=species;
    }
    get species(){
        return this._species;
    }
    makeSound(params) {
        console.log("The " + this._species + " makes a sound");
    }
}

class Dog extends Animal {
    bark(){
        console.log("woof");
    }
}

class Cat extends Animal {
    purr(){
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
