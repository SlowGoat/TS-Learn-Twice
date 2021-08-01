"use strict";
// 数组的两种定义语法
var a = ['11', '22'];
var b = [1, 2, 3];
// 元组类型：是数组的一种，可以指定数组每一项的数据类型
var c = ['1', 1, true];
// 枚举类型：用于标识状态
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["fail"] = -1] = "fail";
})(Flag || (Flag = {}));
var d = Flag.success;
console.log(d);
// 不作赋值，则默认值为0开始的索引值
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
console.log(Color.red);
// 中间作赋值，前面的索引不受影响，后面的从赋值位置开始往后推
var Color2;
(function (Color2) {
    Color2[Color2["green"] = 0] = "green";
    Color2[Color2["yellow"] = 5] = "yellow";
    Color2[Color2["red"] = 6] = "red";
})(Color2 || (Color2 = {}));
// 打印 0，5，6
console.log(Color2.green);
console.log(Color2.yellow);
console.log(Color2.red);
