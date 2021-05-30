/* 
二进制 0B      八进制 0O
Number.isFinite() , Number.isNaN()
Number.parseInt() , Number.parseFloat()
Number.isInteger()
0.1+0.2 === 0.3 ???
Math新增方法
*/

// 十进制 -> 二进制
// ES5的做法
const a = 5; // 101
console.log(a.toString(2));

// 二进制 -> 十进制
// ES5的做法
const b = 101
console.log(parseInt(b, 2));

//ES6 0B二进制  0O八进制
const a1 = 0B101
const b1 = 0O777
console.log(a1); // 5
console.log(b1); // 511

// Infinity表示无限的
// 所以Number.isFinite()方法判断这个数是否是有限的
console.log(Number.isFinite(1.33)) // true
console.log(Number.isFinite(5 / 0)) // false
console.log(Number.isFinite(Infinity)) // false
// 如果参数不是数值类型，一律判断为false
console.log(Number.isFinite('a')); // false
console.log(Number.isFinite(true)); // false

// Number.isNaN()
// Number.parseInt()
// Number.parseFloat()
// 原本这些方法是挂载在window对象下面，现在ES6将window下一些方法放到对应模块下，减小window的体量

// Number.isInteger() 判断是否为整数
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false

// 由于js使用的是 IEEE754 双精度标准
// 所以导致0.1+0.2 !=0.3

// JS的最值
const max = Math.pow(2, 53)
console.log(max); // 9007199254740992
console.log(max + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 ：max-1
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); //false


// Math.trunc() 去除小数部分返回整数
console.log(Math.trunc(5.5)); // 5
console.log(Math.trunc(-5.5)); // -5
console.log(Math.trunc(true)); // 1

console.log(Number.parseInt(5.5)); // 5
console.log(Number.parseInt(-5.5)); // -5
console.log(Number.parseInt(true)); // NaN

// Math.sign() 判断当前这个数值是正数还是负数还是0
console.log(Math.sign(5)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(NaN)); // NaN
console.log(Math.sign(true)); // 1
console.log(Math.sign(false)); // 0
console.log(Math.sign('ABC')); // NaN

// Math.cbrt() 立方根
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt('8')); // NaN