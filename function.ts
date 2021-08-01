/**
 * 方法可选参数 ？
 * 注意：可选参数必须写到参数的最后面
 */
function getInfo(name:string, age?:number) {
  if(age) {
    console.log(`年龄为${age}`);
  }else {
    console.log('年龄保密');
  }
}

getInfo('小明', 13)
getInfo('小红')

// 默认参数
function getInfo2(name:string, age:number = 20) {
  if(age) {
    console.log(`年龄为${age}`);
  }else {
    console.log('年龄保密');
  }
}

getInfo2('小明', 13)
getInfo2('小红')

// 不定参数
function sum1(...args:number[]):number {
  let res: number = 0
  for (const iterator of args) {
    res += iterator
  }
  return res
}

console.log(sum1(1,2,3,4))

function sum2(num1: number, num2: number, ...args: number[]):number {
  let res: number = 0
  for (let iterator of args) {
    res += iterator
  }
  return res
}

console.log(sum2(1,2,3,4))

