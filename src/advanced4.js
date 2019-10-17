"use strict";
var pet = {
    run: function () { },
    jump: function () { }
};
var a01 = 1;
var b01;
var c01;
var Dog01 = /** @class */ (function () {
    function Dog01() {
    }
    Dog01.prototype.run = function () { };
    Dog01.prototype.eat = function () { };
    return Dog01;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.jump = function () { };
    Cat.prototype.eat = function () { };
    return Cat;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    var pet = master === Master.Boy ? new Dog01() : new Cat();
    // pet.run()
    // pet.jump()
    pet.eat();
    return pet;
}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case 'circle':
            return Math.PI * Math.pow(s.radius, 2);
        default:
            return (function (e) { throw new Error(e); })(s);
    }
}
console.log(area({ kind: 'circle', radius: 1 }));
