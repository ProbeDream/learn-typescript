"use strict";
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('Hello Java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('Hello JavaScript');
    };
    return JavaScript;
}());
function isJava(lang) {
    return lang.helloJava !== undefined;
}
function getLanguage(type, x) {
    var lang = type === Type.Strong ? new Java() : new JavaScript();
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJavaScript();
    // }
    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    //     // lang.helloJavaScript()
    // } else {
    //     lang.helloJavaScript()
    // }
    // in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    // typeof
    // if (typeof x === 'string') {
    //     console.log(x.length)
    // } else {
    //     console.log(x.toFixed(2))
    // }
    return lang;
}
getLanguage(Type.Week, 1);
