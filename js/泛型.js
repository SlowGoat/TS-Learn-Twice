"use strict";
// 泛型中 具体什么类型是调用这个方法的时候决定的
function getData(value) {
    return value;
}
getData(123);
getData('123');
// 泛型类
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.show = function () {
        // console.log(this);
        console.log(this.name + '已经' + this.age + '岁了');
    };
    return MyClass;
}());
var testClass = new MyClass('小明', 13);
testClass.show();
var myFn = function (value) {
    return value;
};
console.log(myFn('123'));
// 要使用泛型接口的类，本身也应该是泛型类
var Db = /** @class */ (function () {
    function Db() {
    }
    Db.prototype.updated = function (entity) {
        console.log(entity);
        return true;
    };
    return Db;
}());
var Entity = /** @class */ (function () {
    // 此处的 params 看作一个属性
    function Entity(params) {
        this.params = params;
    }
    return Entity;
}());
var myEnt = new Entity({ name: '名城', id: 1 });
var db = new Db();
db.updated(myEnt);
