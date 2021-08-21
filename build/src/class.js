"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    // public name: string;
    // constructor(name: string) {
    //     this.name = name
    // }
    // disingkat menjadi:
    // constructor(public name: string) {}
    // atau
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var user = new User("Agus", 25);
// console.log(user);
console.log(user.name);
console.log(user.age);
