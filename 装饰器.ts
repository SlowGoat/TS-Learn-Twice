/**
 * 类装饰器 (可增、改)
 * 装饰器能附加到类声明，方法，属性或参数上，可以修改类的行为
 * 通俗来说装饰器就是一个方法，可以注入到类、方法、属性参数上来，起到 扩展 类、属性、方法、参数的功能
 */

  // 1.普通装饰器 (无法传参)
function decorator(target: any) {
  target.prototype.run = function() {
    console.log('跑步');
  }
}

@decorator
class decClass {}

let test1:any = new decClass()
test1.run()

  // 2.装饰器工厂 (可传参)
function decFactory(param1: string, params2: number) {
  return function(target: any) {
    // 可添加 新属性 
    target.prototype.url = param1 + params2
    // 但 不能修改旧属性
    target.test = "3"
    // 既可添加新方法 也能重写
    target.prototype.print = function () {
      console.log(param1 + params2 + 'print方法-----------');
    }
  }
}

@decFactory('http://www.baidu.com', 123)
class decClass2 {
  test: string = "1"
  print() {
    console.log('类原方法打印');
  }
}

let test2:any = new decClass2()
console.log(test2.url);
console.log(test2.test);
test2.print()

  // 3.重写 类 构造函数和方法的装饰器
function funDecorator(target: any) {
  return class extends target {
    apiUrl: string = "我是装饰器里的属性赋值"
    name: string = "测试属性2222"

    test: number = 1
    
    // 类原有的方法也都要重写
    show() {
      console.log(target);
      this.apiUrl += this.apiUrl
      console.log(this.apiUrl);
    }
  }
}

@funDecorator
class Test3 {
  constructor(public apiUrl: string = "我是构造器器里的属性赋值", public name: string = "测试属性1111") {}

  show() {
    console.log(this.apiUrl);
  }
}

let test3 = new Test3()
test3.show()


/**
 * 属性装饰器：
 * 给没有默认值 且 没被赋值的属性 赋值 （不能修改）
 */
function proDec(params: any) {
  // 第一个参数是这个类本身，第二个参数是属性名
  return function(target: any, attr: any) {
    target[attr] = params
  }
}

class Test4 {
  @proDec('http://4399.com')
  url: string | undefined

  getData() {
    console.log(this.url);
  }
}

let test4 = new Test4()
test4.getData()

