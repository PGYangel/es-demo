/* 
ES5中数组遍历方式：
for循环
forEach()：没有返回值，只是针对每个元素调用func
map()：返回新的Array,每个元素为调用func的结果
filter()：返回符合func条件的元素数组
some()：返回boolean，判断是否有元素、是否符合func条件
every()：返回boolean，判断每个元素是否符合func条件
reduce()：接收一个函数作为累加器
for in ？？？
*/


let arr = [1, 2, 3];
// for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("for------------------------------");
// forEach
// 三个参数：当前元素，当前索引值，数组本身
arr.forEach((item, index, array) => {
    console.log(item, index, array);
});
console.log("forEach------------------------------");
/* 
for和forEach之间的区别是什么：
for是可以跳出循环，而forEach是不能够跳出循环
也就是forEach不能使用break和continue两个关键词。
*/

// map
let result = arr.map((value) => {
    value++;
    return value;
});
console.log(arr, result);
console.log("map------------------------------");
/* 
从上面方法可以看出，map返回的是新数组，不会影响原来数组，没有副作用
*/

// filter
let farr = [1, 2, 3];
let fresult = farr.filter((value) => {
    return value === 2;
});
console.log(farr, fresult);
console.log("filter------------------------------");
/* 
从上面方法可以看出，filter返回的是新数组，不会影响原来数组，没有副作用
*/

// some
let sresult = arr.some((value) => {
    return value === 2;
})
console.log(arr, sresult);
console.log("some------------------------------");
/* 
some只要找到一个符合条件的元素，就会返回true
*/

// every
let eresult = arr.every((value) => {
    return value === 2;
})
console.log(arr, eresult);
console.log("every------------------------------");
/* 
every只要有一个不符合条件的元素，就会返回false
*/

// reduce
// reduce第一个参数是方法，第二个参数是累加的初始值
// 第一个参数方法能有四个参数：
// prev：上一次调用回调函数的值，第一次就是初始值
// cur：当前处理元素的值
// index：当前处理元素的索引值
// array：原数组
// 下面使用reduce计算arr数组里面所有元素的累加值
let sum = arr.reduce((prev, cur, index, array) => {
    // 上一次处理的结果加上当前元素值
    return prev + cur
}, 0)
console.log(sum, arr);
console.log("reduce------------------------------sum");
// 利用reduce找出数组里面最大的值
let max = arr.reduce((prev, cur) => {
    return Math.max(prev, cur)
}, arr[0])
console.log(max);
console.log("reduce------------------------------max");

// 利用reduce实现数组去重
let arr2 = [1, 2, 2, 3, 4, 1]
let dresult = arr2.reduce((prev, cur) => {
    // 当cur不在prev的时候，prev增加一项cur
    prev.indexOf(cur) == -1 && prev.push(cur)
    return prev
}, [])
console.log(dresult);
console.log("reduce------------------------------去重");

// for in
Array.prototype.foo = function () {
    console.log('foo');
}
for (let index in arr) {
    console.log(index, arr[index])
}
console.log("for in------------------------------");
/* 
上面代码先在Array数组对象增加一个原型方法foo。
下面调用for in 的时候会把这个新增的原型方法打印出来。
for in 在操作数组的时候不够纯粹，不建议使用for in来操作数组。
*/

/*****************************************************************************************************************************/

/* 
ES6中数组遍历方式：
find()：返回第一个通过测试的元素
findIndex()：返回的值为该通过第一个元素的索引
for of：
values()：
keys()：
entries()：
*/
// find
let f1 = arr.find((value) => {
    return value < 2
})
console.log(f1, arr);
console.log("find------------------------------");

// findIndex
let f2 = arr.findIndex((value) => {
    return value < 2
})
console.log(f2, arr);
console.log("findIndex------------------------------");

// for of
for (let item of arr) {
    console.log(item);
}
console.log("for of------------------------------");

// values
for (let item of arr.values()) {
    console.log(item);
}
/* 
这里跟上面效果一样
*/
console.log("values------------------------------");

// keys
// 循环数组的索引值
for (let item of arr.keys()) {
    console.log(item);
}
console.log("keys------------------------------");

// entries
// 既要获取到索引又要获取到内容
for (let [index, item] of arr.entries()) {
    console.log(index, item);
}