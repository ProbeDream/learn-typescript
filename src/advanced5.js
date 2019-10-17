"use strict";
var obj01 = {
    a: 1,
    b: 2,
    c: 3
};
// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// }
function getValues(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(getValues(obj01, ['a', 'b']));
var key;
// T[K]
var value;
// T extends U
