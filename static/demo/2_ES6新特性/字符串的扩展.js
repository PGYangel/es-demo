/* 
字符串的扩展

字符的Unicode表示法
字符串的遍历器接口
模板字符串
String.fromCodePoint()
String.prototype.includes()
String.prototype.startsWith()
String.prototype.endsWith()
String.prototype.repeat()
*/

// unicode
// es6表示unicode： \uxxxx
// 后面的xxxx是码点，码点取值范围是0000~ffff
// 如果文字超过了码点取值范围，增加了码点范围，用{}包裹码点，\u{20BB7}
// 如果想简写也用{}包裹，如字母A的码点是0041,\u{41}

// \HHH，反斜杠后面是三位八进制值，表示一个字符
console.log('\172' === 'z'); // true，'\172'.toString() =>'z'

// \xHH,反斜杠x后面加两位十六进制值，表示一个字符
console.log('\x7A' === 'z'); // true

// for of 遍历字符串
for (let item of 'abc') {
    console.log(item);
}

// 重点：模板字符串
// 使用反引号来代替原来的单引号和双引号。在数字键1旁边的~`键，`即反引号
// 字符串换行
const str = `abc
efg
hij`
console.log(str);
// 字符串增加逻辑
const a = 10
const b = 15
const c = '小明'
const str2 = `${c}的年龄是${a+b}岁`
console.log(str2);

// 嵌套模板
function isBig() {
    return true
}
const str3 = `icon icon-${isBig()?'big':'small'}`
console.log(str3);

// 带标签的模板字符串
const foo = (a, b, c, d) => {
    console.log(a); //字符串根据$拆分的数组
    console.log(b); //第一个${name}值
    console.log(c); //第二个${age}值
    console.log(d); //undefined
}
const name = '张三'
const age = 18
foo `这是${name}，他的年龄是${age}岁`

// fromCharCode这是ES5方法，根据unicode码点返回字符
// 由于这个码点超出了ffff识别范围，所以识别不了
console.log(String.fromCharCode(0x20BB7));
// ES6方法fromCodePoint可以解决以上问题
console.log(String.fromCodePoint(0x20BB7));

// includes判断字符串是否包括某字符串
const str4 = 'baidu'
console.log(str4.indexOf('id')); // 2
console.log(str4.includes('id')); // true
// 判断字符串是否以某字符串开头
console.log(str4.startsWith('ba')); // true
// 判断字符串是否以某字符串结尾
console.log(str4.endsWith('du')); // true
// 字符串循环出现
const newStr = str4.repeat(2)
console.log(newStr);