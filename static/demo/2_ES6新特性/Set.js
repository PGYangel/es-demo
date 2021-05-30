/* 
Set：一种新的数据结构

常用方法
遍历
应用场景
WeakSet
*/

// Set的成员值一定是唯一的不重复的
let s = new Set([1, 2, 3, 2])
// 添加数据add
s.add('a')
// add可以链式操作
s.add('b').add('c')
// 删除数据delete
s.delete('b')
// 清除所有数据clear
// s.clear()
console.log(s);
// has判断是否包含某项数据
console.log(s.has('a')); // true
// size输出包含多少项数据
console.log(s.size);

// 遍历Set
s.forEach(item => console.log(item))
for (let item of s) {
    console.log(item);
}
// Set的key值和value值是一样的
for (let item of s.keys()) {}
for (let item of s.values()) {}
for (let item of s.entries()) {
    console.log(item[0], item[1]);
}

// 应用场景
// 数组去重
let arr = [1, 2, 3, 4, 2, 3];
let s1 = new Set(arr)
console.log(s1);
// Set转换成数组
console.log([...s1]);
console.log(Array.from(s1));

// 数组合并去重
// 这里也能理解成并集
let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]
let s2 = new Set([...arr1, ...arr2])
console.log(s2);

// 交集
let s3 = new Set(arr1)
let s4 = new Set(arr2)
let res = new Set(arr1.filter(item => s4.has(item)))
console.log(res);

// 差集：除去交集的元素
let res2 = new Set(arr1.filter(item => !s4.has(item)))
let res3 = new Set(arr2.filter(item => !s3.has(item)))
console.log(res2);
console.log(res3);
console.log([...res2, ...res3]);

// WeakSet和Set类似，但是有以下区别。
// WeakSet的成员只能是对象，而不能是其他类型的值
// WeakSet中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。所以WeakSet不能被循环遍历
let ws = new WeakSet()
const obj1 = {
    name: '张三'
}
const obj2 = {
    age: 18
}
ws.add(obj1)
ws.add(obj2)
// 删除的时候要是同一个内存地址的对象才可以正确删除
ws.delete(obj1)
console.log(ws);
console.log(ws.has(obj2));