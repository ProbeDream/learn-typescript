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
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
        this.name = name;
    }
    Dog.prototype.run = function () { };
    return Dog;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.age = 18;
        _this.color = color;
        return _this;
    }
    A.prototype.say = function () { console.log("my name is " + this.name + " this color is " + this.color + " and my age " + this.age); };
    return A;
}(Dog));
new A('Jerry', 'Blue').say();
