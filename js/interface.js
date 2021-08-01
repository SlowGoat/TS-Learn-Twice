"use strict";
(function () {
    function tellName(name) {
        console.log(name.firstName, name.secondName);
    }
    tellName({ firstName: 'Slow', secondName: 'Goat' });
    tellName({ firstName: 'Slow' });
    var http = function (url, type) {
        return {
            url: url,
            type: type
        };
        // return [1]
    };
    console.log(http('/balabala/index', 'post'));
    var arr = ['111', '222'];
    console.log(arr);
    var myObj2 = { 1: 123, 2: 123, age: 123 };
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.eat = function () {
            console.log(this.name + '吃');
            return this.name + '吃';
        };
        Person.prototype.drink = function () {
            console.log(this.name + '喝水');
        };
        return Person;
    }());
    var person = new Person('小米', 13);
    person.eat();
    person.drink();
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        Teacher.prototype.breathe = function () {
            console.log('呼吸');
        };
        Teacher.prototype.eat = function () {
            console.log('吃饭');
        };
        Teacher.prototype.teach = function () {
            console.log('教书');
        };
        return Teacher;
    }());
    var teacher1 = new Teacher();
    teacher1.teach();
})();
