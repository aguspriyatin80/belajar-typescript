"use strict";
// tipe data balikan function
function getName() {
    return 'Agus Priyatin';
}
function getAge() {
    return 33;
}
function printName() {
    console.log("Print name");
}
// printName();
// Tipe data pada arguments
function multiply(val1, val2) {
    return val1 * val2;
}
function add(val1, val2) {
    return val1 + val2;
}
var kali = multiply(2, 4);
console.log(kali);
var tambah = add(2, 4);
console.log(tambah);
var Add = function (val1, val2) {
    return val1 + val2;
};
var fullName = function (first, last) {
    if (last === void 0) { last = "Priyatin"; }
    return first + " " + last;
};
// console.log(fullName("Agus"));
// optionan parameter
var getFullName = function (first, last) {
    return first + last;
};
console.log("Agus");
