"use strict";
/*
 * X（目标类型） = Y（源类型），X 兼容 Y
 */
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
var s = 'a';
var xx = { a: 1, b: 2 };
var y = { a: 1, b: 2, c: 3 };
xx = y;
function hof(handler) {
    return handler;
}
// 1)参数个数
var handler1 = function (a) { };
hof(handler1);
var handler2 = function (a, b, c) { };
// hof(handler2)
// 可选参数和剩余参数
var a = function (p1, p2) { };
var bb = function (p1, p2) { };
var c = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
a = bb;
a = c;
// b = a
// b = c
c = a;
c = bb;
// 2)参数类型
var handler3 = function (a) { };
var p3d = function (point) { };
var p2d = function (point) { };
p3d = p2d;
// p2d = p23
// 3) 返回值类型
var ff = function () { return ({ name: 'Alice' }); };
var g = function () { return ({ name: 'Alice', location: 'Beijing' }); };
ff = g;
function overload(a, b) { }
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}
// 枚举兼容性
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
var fruit = 1;
var no = Fruit.Apple;
// let color: Color.Red = Fruit.Apple
// 类兼容性
var AA = /** @class */ (function () {
    function AA(p, q) {
        this.id = 1;
        this.name = '';
    }
    return AA;
}());
var B = /** @class */ (function () {
    function B(p) {
        this.id = 2;
        this.name = '';
    }
    B.s = 1;
    return B;
}());
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return C;
}(AA));
var aa = new AA(1, 2);
var bbb = new B(1);
// aa = bb
// bb = aa
var cc = new C(1, 2);
aa = cc;
cc = aa;
var obj12 = {};
var obj22 = {};
obj12 = obj22;
var log1 = function (x) {
    console.log('x');
    return x;
};
var log2 = function (y) {
    console.log('y');
    return y;
};
log1 = log2;
