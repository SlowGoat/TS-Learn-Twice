"use strict";
/**
 * 类装饰器 (可增、改)
 * 装饰器能附加到类声明，方法，属性或参数上，可以修改类的行为
 * 通俗来说装饰器就是一个方法，可以注入到类、方法、属性参数上来，起到 扩展 类、属性、方法、参数的功能
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1.普通装饰器 (无法传参)
function decorator(target) {
    target.prototype.run = function () {
        console.log('跑步');
    };
}
var decClass = /** @class */ (function () {
    function decClass() {
    }
    decClass = __decorate([
        decorator
    ], decClass);
    return decClass;
}());
var test1 = new decClass();
test1.run();
// 2.装饰器工厂 (可传参)
function decFactory(param1, params2) {
    return function (target) {
        // 可添加 新属性 
        target.prototype.url = param1 + params2;
        // 但 不能修改旧属性
        target.test = "3";
        // 既可添加新方法 也能重写
        target.prototype.print = function () {
            console.log(param1 + params2 + 'print方法-----------');
        };
    };
}
var decClass2 = /** @class */ (function () {
    function decClass2() {
        this.test = "1";
    }
    decClass2.prototype.print = function () {
        console.log('类原方法打印');
    };
    decClass2 = __decorate([
        decFactory('http://www.baidu.com', 123)
    ], decClass2);
    return decClass2;
}());
var test2 = new decClass2();
console.log(test2.url);
console.log(test2.test);
test2.print();
// 3.重写 类 构造函数和方法的装饰器
function funDecorator(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "我是装饰器里的属性赋值";
            _this.name = "测试属性2222";
            _this.test = 1;
            return _this;
        }
        // 类原有的方法也都要重写
        class_1.prototype.show = function () {
            console.log(target);
            this.apiUrl += this.apiUrl;
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var Test3 = /** @class */ (function () {
    function Test3(apiUrl, name) {
        if (apiUrl === void 0) { apiUrl = "我是构造器器里的属性赋值"; }
        if (name === void 0) { name = "测试属性1111"; }
        this.apiUrl = apiUrl;
        this.name = name;
    }
    Test3.prototype.show = function () {
        console.log(this.apiUrl);
    };
    Test3 = __decorate([
        funDecorator
    ], Test3);
    return Test3;
}());
var test3 = new Test3();
test3.show();
/**
 * 属性装饰器：
 * 给没有默认值 且 没被赋值的属性 赋值 （不能修改）
 */
function proDec(params) {
    // 第一个参数是这个类本身，第二个参数是属性名
    return function (target, attr) {
        console.log('看这里', target);
        target[attr] = params;
    };
}
var Test4 = /** @class */ (function () {
    function Test4() {
    }
    Test4.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        proDec('http://4399.com')
    ], Test4.prototype, "url", void 0);
    __decorate([
        proDec('test')
    ], Test4, "staticProperty", void 0);
    return Test4;
}());
var test4 = new Test4();
test4.getData();
console.log(Test4.staticProperty);
