/* 
正则表达式扩展

y修饰符
u修饰符
*/

// i（忽略大小写）
// m（多行匹配）
// g（全局匹配）

// y修饰符：粘连修饰符
const str = 'aaa_aa_a'
const reg1 = /a+/g // g修饰符每次匹配剩余字符
const reg2 = /a+/y // y修饰符每次剩余的第一个开始匹配

console.log(reg1.exec(str)); // aaa
console.log(reg1.exec(str)); // aa
console.log(reg1.exec(str)); // a

console.log(reg2.exec(str)); // aaa
console.log(reg2.exec(str)); // null
console.log(reg2.exec(str)); // aaa

// u修饰符，unicode
const uStr = '\uD842\uDFB7' // 表示一个字符,这是一个整体
console.log(/^\uD842/.test(uStr)); // es5 true
console.log(/^\uD842/u.test(uStr)); // es6 false

// .除了换行符以外的任意单个字符
console.log(/^.$/.test(uStr)); // false
console.log(/^.$/u.test(uStr)); // true

console.log(/\u{61}/.test('a')); // false
console.log(/\u{61}/u.test('a')); // true

// 以上主要是要说明u修饰符是unicode超出范围来正确进行正则匹配