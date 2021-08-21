"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// public: bisa diakses di semua class / dari luar class
// protected: hanya bisa diakses dari class tersebut dan class turunannya
// private: hanya bisa diakses dari class itu sendiri
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = "Email salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(User));
var admin = new Admin("08121212", "Agus", 20);
console.log(admin.getName());
console.log(admin.getRole());
admin.setName("Eka");
console.log(admin.phone);
admin.email = "agus@mail.com";
console.log(admin.email);
