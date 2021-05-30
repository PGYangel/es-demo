/* 
Map：一种新的数据结构

常用方法
遍历
应用场景
WeakMap
*/

// 常用方法
let map = new Map()
let obj = {
    name: '张三'
}
map.set(obj, 'zhangsan')
console.log(map);
console.log(map.get(obj));
console.log(map.has(obj));
map.delete(obj)

let map2 = new Map([
    ['name', 'lisi'],
    ['age', 18],
])
console.log(map2);
console.log(map2.size);
console.log(map2.has('name'));
console.log(map2.get('age'));
map2.set('name', '王五')
map2.delete('age')
console.log(map2);

// 遍历
// 注意forEach里面第一个参数是value，第二个参数是key
map2.forEach((value, key) => console.log(value, key))
// 注意for of里面第一个参数是key，第二个参数是value
for (let [key, value] of map2) {
    console.log(key, value);
}

for (let key of map2.keys()) {
    console.log(key);
}
for (let value of map2.values()) {
    console.log(value);
}
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

// map的应用场景跟object是一样的
// map的api跟object比多一点灵活，
// 比如has方法，object只能循环判断
// 比如size属性，object也进行循环计数
// 在外资料显示，频繁对对象增删操作，map比object性能上更加有优势


// Weakmap
// Weakmap跟map相似，但是key只能是引用数据类型
let wm = new WeakMap()
wm.set([1], 2)
wm.set({
    name: '张三'
}, '啦啦啦')
// wm.clear()，注意WeakMap不支持clear方法
// WeakMap也不支持遍历
// 因为不可遍历，所以也没有size属性
// WeakMap也是弱引用，垃圾回收机制被回收后，弱引用里面的键值对也会消失，放置内存泄露
console.log(wm);