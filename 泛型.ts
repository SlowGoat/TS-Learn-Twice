// 泛型中 具体什么类型是调用这个方法的时候决定的
function getData<T>(value: T): T {
  return value
}
getData<number>(123)
getData<string>('123')

// 泛型类
class MyClass<A, B> {
  constructor(public name: A, public age: B) {

  }

  show() {
    // console.log(this);
    console.log(this.name + '已经' + this.age + '岁了');
  }
}

let testClass = new MyClass<String, number> ('小明', 13)
testClass.show()

// 泛型接口
interface FunIF {
  <T>(value: T): T
}

let myFn: FunIF = function<T>(value: T):T {
  return value
}
console.log(myFn<string>('123'));

// 传入类  的泛型
interface DbI<T> {
  updated(entity: T): boolean
}
  // 要使用泛型接口的类，本身也应该是泛型类
class Db<T> implements DbI<T> {
  updated(entity: T): boolean {
    console.log(entity)
    return true
  }
}

class Entity {
  // 此处的 params 看作一个属性
  constructor(public params: {name: string, id: number}) {}
}

let myEnt = new Entity({name: '名城', id: 1})
let db = new Db<Entity>()
db.updated(myEnt)



