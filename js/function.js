"use strict";
/**
 * 方法可选参数 ？
 * 注意：可选参数必须写到参数的最后面
 */
function getInfo(name, age) {
    if (age) {
        console.log("\u5E74\u9F84\u4E3A" + age);
    }
    else {
        console.log('年龄保密');
    }
}
getInfo('小明', 13);
getInfo('小红');
// 默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        console.log("\u5E74\u9F84\u4E3A" + age);
    }
    else {
        console.log('年龄保密');
    }
}
getInfo2('小明', 13);
getInfo2('小红');
// 不定参数
function sum1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var iterator = args_1[_a];
        res += iterator;
    }
    return res;
}
console.log(sum1(1, 2, 3, 4));
function sum2(num1, num2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var res = 0;
    for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
        var iterator = args_2[_a];
        res += iterator;
    }
    return res;
}
console.log(sum2(1, 2, 3, 4));
