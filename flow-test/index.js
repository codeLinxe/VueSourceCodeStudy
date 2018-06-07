/*@flow*/``

// 1. flow 类型检测，联系变量的上下文
// function split(str) {
//     return str.split(' ')
// }

// split(11)

// 2. flow 不会报错，因为js里字符串 + 数字 是允许的
// function add(x, y) {
//     return x + y;
// }

// add('Hello', 11)

// 如果我们想要两个数字类型，可以用类型注释的方式
// function add(x : number, y : number): number {
//     return x + y;
// }
    
// add('Hello', 11)

// 3. flow 对数组做检测
// var arr: Array<number> = [1, 2, 3]
// arr.push('Hello')

// 4. 类和对象
class Bar {
    x: string;           // x 是字符串
    y: string | number;  // y 可以是字符串或者数字
    z: boolean;
    
    //构造函数
    constructor(x: string, y: string | number) {
      this.x = x
      this.y = y
      this.z = false
    }
  }
  
  var bar: Bar = new Bar('hello', 4)
  
  var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
    a: 'hello',
    b: 11,
    c: ['hello', 'world'],
    d: new Bar('hello', 3)
  }