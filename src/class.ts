export class User {
    // public name: string;

    // constructor(name: string) {
    //     this.name = name
    // }
    // disingkat menjadi:
    // constructor(public name: string) {}
    // atau
    constructor(public name: string, public age: number) {
        this.name = name
    }
}
let user = new User("Agus", 25);
// console.log(user);
console.log(user.name);
console.log(user.age);

