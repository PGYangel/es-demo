/* 
String.prototype.padStart() // 开始的地方填充
String.prototype.padEnd() // 结束的地方填充
*/

let str = 'abc'

console.log(str.padStart(8, '1')); // 用'1'从开始将字符填充到长度为8：11111abc
console.log(str.padEnd(8, '2')); // 用'2'从结尾将字符填充到长度为8：abc22222
console.log(str.padStart(8)); // 第二个参数不填，将用空格来填充

// 时间的运用：yyyy-MM-DD格式
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = (now.getDate()).toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`);

// 电话号码隐藏
const tel = '13801234567'
const newTel = tel.slice(-4).padStart(tel.length, '*')
console.log(newTel);