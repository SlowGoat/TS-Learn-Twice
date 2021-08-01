(function () {

// 限制对象属性，接口可复用
interface FullName {
  firstName: string
  // 加 ? 表示可选属性
  secondName?: string   
}

function tellName(name: FullName) {
  console.log(name.firstName, name.secondName)
}

tellName({firstName: 'Slow', secondName: 'Goat'})
tellName({firstName: 'Slow'})

// 限制函数类型的接口
interface MyHttp {
  (url: string, type: string): object
}

interface MyObj {
  url: string, 
  type: string
}

let http: MyHttp = function(url: string, type: string): MyObj {
  return {
    url,
    type
  }
  // return [1]
}
console.log(http('/balabala/index', 'post'));

// 限制数组类型的接口
interface MyArr {
  [index: number]: string
}

let arr: MyArr = ['111', '222']
console.log(arr);

// 可索引接口
interface MyObj2 {
  // 索引签名参数类型必须为 "string" 或 "number"
  [index: number]: number
  [index: string]: number
}

let myObj2: MyObj2 = {1: 123, 2: 123, age: 123}

// 限制类 的接口
interface MyClass {
  name: string
  age: number
  // 接口限制的方法 可以不传参，但如果穿了就要一样，且返回值类型什么时候都要一样 
  eat(food: string): string
}

class Person implements MyClass {

  constructor(public name: string, public age: number) {}

  eat(): string {
    console.log(this.name + '吃')
    return this.name + '吃'
  }

  drink(): void {
    console.log(this.name + '喝水')
  }

}

let person = new Person('小米', 13)
person.eat()
person.drink()

// 接口可以 继承接口
interface Animal {
  breathe(): void
}

interface Person3 extends Animal{
  eat(): void
}

class Teacher implements Person3 {
  breathe(): void {
    console.log('呼吸');
    
  }

  eat(): void {
    console.log('吃饭');
  }

  teach(): void {
    console.log('教书');
  }
}

let teacher1 = new Teacher()
teacher1.teach()







})()