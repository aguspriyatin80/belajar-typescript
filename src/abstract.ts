abstract class Vehicle {
    abstract wheels: number
    start(): void {
        console.log('broom')
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motorcyle extends Vehicle {
    wheels: number = 2;
}

const car = new Car()
const motorcyle = new Motorcyle()
console.log(car.wheels)
console.log(motorcyle.wheels)
car.start()
motorcyle.start()