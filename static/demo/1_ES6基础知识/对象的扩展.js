/* 
对象的扩展

属性简洁表示法
属性名表达式
Objec.is()
扩展运算符 与 Object.assign()
in
对象的遍历方式
*/

// 属性简洁表示法
// 如果属性key跟变量名一直，可简写
let name = '张三'
let age = 18
let people = {
    name,
    age
}
console.log(people);

// 属性名表达式
// 当我们想key是变量的时候，就需要使用属性名表达式
let s = 'school'
let obj = {
    [s]: '清华'
}
console.log(obj); // 此时obj的key[s],就变成school

// 对象里面function也可以进行简写
let obj2 = {
    name: '张三',
    study() {
        console.log(this.name + '正在学习');
    }
}
obj2.study()

// Objec.is：用来判断两个值是否相等，且判断类型
// 那么跟===全等有什么区别？
console.log(2 === '2'); // false
console.log(Object.is(2, '2')); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

// 两个对象的比较
// 两个对象的比较并不是比较对象的内容，而是比较栈内存里面的引用地址
let obj3 = {}
let obj4 = {}
console.log(obj3 === obj4); // false
console.log(Object.is(obj3, obj4)); // false
let obj5 = obj3
console.log(obj3 === obj5); // true
console.log(Object.is(obj3, obj5)); // true

// 扩展运算符
let x = {
    a: 1,
    b: 2
}
let y = {
    ...x
}
console.log(y);
// Object.assign：将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// 语法：Object.assign(target, ...sources)
let z = {}
Object.assign(z, x)
console.log(z);

// in：用来判断对象是否包含某属性
console.log('a' in x); // true
console.log('aa' in x); // false

// in也能用于数组，但是用在数组是判断当前索引下面是否有值
let arr = [1, 2, 3]
console.log(2 in arr); // true，索引2位置有数字3
console.log(3 in arr); // false，索引3位置没有值

// 对象的遍历
let objEach = {
    name: '张三',
    age: 18,
    school: '清华'
}
// 方法一
for (let key in objEach) {
    console.log(key, objEach[key]);
}
// 方法二
Object.keys(objEach).forEach(key => {
    console.log(key, objEach[key]);
})
// 方法三
Object.getOwnPropertyNames(objEach).forEach(key => {
    console.log(key, objEach[key]);
})
// 方法四
Reflect.ownKeys(objEach).forEach(key => {
    console.log(key, objEach[key]);
})