/* 
Array.prototype.includes(searchElement,fromIndex)

includes VS indexOf
*/

// includes在ES6数组扩展中使用过，但是是ES7正式纳入标准
// includes返回boolean
const arr = ['es6', 'es7', 'es8', NaN]
console.log(arr.includes('es7')); // true
console.log(arr.includes('es7', 2)); // false，因为这里是从索引值2的位置往后找
console.log(arr.includes('es7', -1)); // false，从后面第一个开始往后找

// indexOf返回当前索引值，没有返回-1
console.log(arr.indexOf('es8')) // 2

// includes可以检测NaN,indexof不能检测NaN
console.log(arr.includes(NaN)); // true
console.log(arr.indexOf(NaN)); // -1