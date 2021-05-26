/**
 * 新声明方式：let
 * 1、不属于顶层对象 window
 * 2、不允许重复声明
 * 3、不存在变量提升
 * 4、暂时性死区
 * 5、块级作用域
 */

/* 
// 原来var声明
var a = 5;
console.log(a); // 5
console.log(window.a); // 5
delete a
console.log(a); // 5

b = 6;
console.log(b); // 6
console.log(window.b); // 6
delete b;
console.log(b); // Uncaught ReferenceError: b is not defined

delete只能删除对象中的属性，
因为b没有用var声明，所以b是挂载到window顶级对象下面的b属性，所以b能被delete关键字删除，
而a是通过var声明的变量，不能被delete删除。

但是a是全局变量，这是js初期设计缺陷，因为全局变量会跟顶层对象的属性进行挂钩，
所以window.a可以正常输出，但是a不是window对象的属性，所以不能进行delete。
*/

// let定义不属于顶层对象 window
let a = 5;
console.log(a); //5
console.log(window.a); // undefined

// let不允许重复声明
// let a = 6; // Identifier 'a' has already been declared

// let不存在变量提升
console.log(b); // undefined
var b = 6;

// console.log(c); // Uncaught ReferenceError: c is not defined
// let c = 7;
