/* 
Symbol：一种新的原始数据类型

声明方式
应用场景
*/

let s1 = Symbol()
let s2 = Symbol()
console.log(s1); // Symbol()
console.log(s2); // Symbol()
console.log(s1 === s2); // false

let s3 = Symbol('foo');
let s4 = Symbol('bar');
console.log(s3); // Symbol(foo)
console.log(s4); // Symbol(bar)
console.log(s3 === s4); // false

// 如果Symbol声明时传入的参数是对象，会自动调用自身的toString方法
const obj = {
    name: '张三'
}
let s5 = Symbol(obj)
console.log(s5); // Symbol([object Object])

// for方法
// 使用for方法会在全局进行表述的定义，下次再使用for定义，会先去全局定义里面找有没有定义过的描述
let s6 = Symbol.for('foo')
let s7 = Symbol.for('foo')

function foo() {
    return Symbol.for('foo')
}
s8 = foo()
console.log(s6 === s7); // true
console.log(s6 === s8); // true

// keyFor来查看你的Symbol有没在全局登记过
const s9 = Symbol('foo')
const s10 = Symbol.for('foo')
console.log(Symbol.keyFor(s9)); // undefined
console.log(Symbol.keyFor(s10)); // foo

// 应用场景

// 用Symbol保证对象的Key可以重名但是Key不相等，得到同时存在
// 例如一个对象里面保存班级同学的信息，但是很有可能班级有重名的情况
const stu1 = Symbol('张三')
const stu2 = Symbol('张三')
const grade = {
    [stu1]: {
        address: 'aaa',
        tel: '111'
    },
    [stu2]: {
        address: 'bbb',
        tel: '222'
    },
}
console.log(grade);
console.log(grade[stu1]);
console.log(grade[stu2]);


// 使用Symbol可以相对隐藏类的实例属性
const sym = Symbol('age')
class User {
    constructor(name) {
        this.name = name
        this[sym] = 18
    }
    getName() {
        console.log('getName：' + this.name + ' age：' + this[sym])
    }
}

const user = new User('张三')
user.getName()
// for in是读取不到sym属性
for (let key in user) {
    console.log(key);
}
// keys读取不到sym属性
for (let key of Object.keys(user)) {
    console.log(key);
}
// getOwnPropertySymbols只能读取Symbol属性
for (let key of Object.getOwnPropertySymbols(user)) {
    console.log(key);
}
// Reflect.ownKeys既可以读取一般实例属性，也可以读取Symbol属性
for (let key of Reflect.ownKeys(user)) {
    console.log(key);
}

// 消除魔术字符串
function getArea(str) {
    let area = 0
    switch (str) {
        case 'aaa':
            area = 1
            break
        case 'bbb':
            area = 2
            break
    }
    return area
}
console.log(getArea('aaa'))
// 这里的aaa，bbb就是魔术字符串，需要来回编写，而且只要原方法修改，另外地方也要跟着修改

// 使用对象来消除魔术字符串
/* 
const strType = {
    aaa: 'aaa',
    bbb: 'bbb',
} 
*/
// 由于上面value其实并不需要关心是什么字符串，所以可以用Symbol来代替
const strType = {
    aaa: Symbol(),
    bbb: Symbol(),
}

function getArea2(str) {
    let area = 0
    switch (str) {
        case strType.aaa:
            area = 1
            break
        case strType.bbb:
            area = 2
            break
    }
    return area
}
console.log(getArea2(strType.aaa))