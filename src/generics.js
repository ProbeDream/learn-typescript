"use strict";
function log(value) {
    console.log(value);
    return value;
}
log(["a", "b"]);
var myLog = log;
var Log3 = /** @class */ (function () {
    function Log3() {
    }
    Log3.prototype.run = function (value) {
        console.log(value);
        return value;
    };
    return Log3;
}());
var log11 = new Log3();
log11.run(1);
var log21 = new Log3();
log21.run({ a: 1 });
function logAdvance(value) {
    console.log(value, value.length);
    return value;
}
logAdvance([1]);
logAdvance('123');
logAdvance({ length: 3 });
