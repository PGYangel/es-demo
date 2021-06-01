/* 
Object.values()
Object.entries()
*/

const obj = {
    name: '张三',
    age: 18
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.entries(obj));

/* 
对象属性描述符
Object.getOwnPropertyDescriptors()
    value：当前值
    writable：是否可以修改
    configurable：能否使用delete删除属性
    enumerable：是否能通过for in循环
*/
const desc = Object.getOwnPropertyDescriptors(obj)
console.log(desc);

// Reflect.defineProperty可以设置对象这四个属性
Reflect.defineProperty(obj, 'name', {
    value: '李四',
    writable: true,
    configurable: true,
    enumerable: true,
})