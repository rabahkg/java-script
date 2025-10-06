// one class can inherities and method for other class 
// by using extended keyword 

// base class
class animal {
    constructor(name) {
        this.name = name; //initialization the properties
    }

    speak() {
        console.log(`${this.name} makes a sound`);

    }
}



//derived class inherits from animal;
class Dog extends animal {
    constructor(name, breed) {
        super(name) //calls the parent constructor
        this.breed = breed;
    }

    // override speek method (polimorfisam)
    speak() {
        console.log(`${this.name}-${this.breed} barks`);

    }
}

const dog = new Dog("rex", "german shepherd");
dog.speak()