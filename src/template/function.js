"use strict";
/* 函数定义 */
function add3(x, y) {
    return x + y;
}
var add4;
function add7(x, y) {
    return y ? x + y : x;
}
function add8(x, y, z, q) {
    if (y === void 0) { y = 0; }
    if (q === void 0) { q = 1; }
    return x + y + z + q;
}
function add9(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (previous, current) { return previous + current; });
}
console.log(add9(1, 1, 2, 3, 4, 5, 6));
function add10() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce(function (previous, current) { return previous + current; });
    }
    if (typeof first === 'string') {
        return rest.join("");
    }
}
