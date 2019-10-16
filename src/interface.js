"use strict";
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        /* value.id++ */
    });
}
var result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
    ]
};
render(result);
var chars = ['a', 'b'];
var add1 = function (a, b) { return a + b; };
function getLib() {
    var lib = (function () { });
    lib.version = '1.0.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1();
var lib2 = getLib();
lib2.doSomething();
