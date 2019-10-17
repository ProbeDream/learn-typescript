"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () { console.log(this.name + " run run run!"); };
    Person.prototype.sleep = function () { console.log(this.name + " please quick sleep!"); };
    return Person;
}());
var jerry = new Person('Jerry');
jerry.run();
jerry.sleep();
/*
 接口可以继承接口 类只能够实现接口!
*/
