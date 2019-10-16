"use strict";
/* 数字枚举 */
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
/* 字符串枚举 */
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60,\u6210\u529F\u4E86\u54E6!";
    Message["Fail"] = "\u5F88\u62B1\u6B49\u5931\u8D25\u4E86!";
})(Message || (Message = {}));
/* 异构枚举 */
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
/* 枚举成员 */
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
/* 枚举类型 */
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
var e1 = 3;
var e2 = 3;
var e3 = 3;
var g1 = G.a;
var g2 = G.a;
