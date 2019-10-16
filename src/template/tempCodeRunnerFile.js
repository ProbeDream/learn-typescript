"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.say = function () {
        console.log("this is about say method!");
    };
    return Animal;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.name = name;
        return _this;
    }
    Dog1.prototype.sleep = function () {
        console.log(this.name + " is sleep!");
    };
    return Dog1;
}(Animal));
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.name = name;
        return _this;
    }
    Husky.prototype.sleep = function () {
        console.log(this.name + " is sleep");
    };
    return Husky;
}(Animal));
var bigDog = new Dog1('big Dog');
var bigCat = new Husky('big cat');
var animals = [bigCat, bigDog];
animals.forEach(function (item, index) { return animals[index].sleep(); });
