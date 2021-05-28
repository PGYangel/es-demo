/* 
1、...
2、扩展运算符：把数组或者类数组展开成用逗号隔开的值
3、rest参数：把逗号隔开的值组合成一个数组
*/

// 扩展运算符
function foo(a, b, c) {
    console.log(a, b, c);
}
let arr = [1, 2, 3]
foo(...arr)
// 如果用解构赋值，那么foo的参数也要是数组，使用扩展运算符就不需要

// 将两个数组合并成一个数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
// ES5将其两个数组合并
Array.prototype.push.apply(arr1, arr2)
console.log(arr1);
// ES6来合并
arr1.push(...arr2)
console.log(arr1);

// 将字符串打散成数组
let str = 'abc'
console.log([...str]);

// rest参数
// 下面实现不确定数量参数进行累加的方法
function sum(...args) {
    console.log(args);
    let num = 0;
    args.forEach((item) => {
        num += item
    })
    return num;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));