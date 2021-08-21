"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("nyala");
    };
    Asus.prototype.off = function () {
        console.log("mati");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log("nyala");
    };
    Macbook.prototype.off = function () {
        console.log("mati");
    };
    return Macbook;
}());
var asus = new Asus('Asus', true);
console.log(asus.name);
console.log(asus.on());
var macbook = new Macbook('Macbook', true);
console.log(macbook.name);
console.log(macbook.on());
