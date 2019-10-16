"use strict";
/* 原始类型 */
var bool = true;
var num = 123;
var str = "abc";
/* str = 123; */
/* 数组 */
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, "string"];
/* 元祖 */
var tuple = [1, "2"];
/* 联合类型 */
var arr = [1, "2", null, undefined];
/* 函数 */
var add = function (x, y) { return x + y; };
var computed;
computed = function (x, y) { return x + y; };
/* 对象 */
var obj = { x: 1, y: 2 };
var obj1 = { x: 1, y: 2 };
/* symbol类型 */
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
/* undefined,null */
var un = undefined;
var nu = null;
/* void */
var noReturn = function () { };
/* any */
var x;
/* never */
var error = function () {
    throw new Error("error");
};
var endless = function () {
    while (true) { }
};
