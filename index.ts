// 数组的两种定义语法
let a:string[] = ['11', '22']
let b:Array<number> = [1, 2, 3]

// 元组类型：是数组的一种，可以指定数组每一项的数据类型
let c:[string, number, boolean] = ['1', 1, true]

// 枚举类型：用于标识状态
enum Flag {
  success = 1,
  fail = -1
}

let d:Flag = Flag.success
console.log(d);

// 不作赋值，则默认值为0开始的索引值
enum Color {
  green,
  yellow,
  red
}

console.log(Color.red)  

// 中间作赋值，前面的索引不受影响，后面的从赋值位置开始往后推
enum Color2 {
  green,
  yellow = 5,
  red
}

// 打印 0，5，6
console.log(Color2.green)  
console.log(Color2.yellow)  
console.log(Color2.red)  


 