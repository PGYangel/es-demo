/* 
数组的扩展：

类数组 / 伪数组
Array.from()
Array.of()
copyWithin()
fill()
includes()
*/

// 类数组、伪数组
let divs = document.getElementsByTagName('div');
console.log(divs); // HTMLCollection

let divs2 = document.getElementsByClassName('abc');
console.log(divs2); // HTMLCollection

let divs3 = document.querySelectorAll('.xxx');
console.log(divs3); // NodeList
// HTMLCollection、NodeList等类型都是伪数组
// 这里伪数组不能使用push这种数组原有的方法，因为这些类型没有定义push方法
console.log(divs instanceof Array); // false
console.log(divs2 instanceof Array); // false
console.log(divs3 instanceof Array); // false

// 使用slice将类数组转换成真正的数组
let arr = Array.prototype.slice.call(divs)
console.log(arr);

// arguments也是伪数组
function foo() {
    console.log(arguments);
}
foo(1, 2, 3)

// 伪数组必要条件
// 下标索引必须是0为开头的连续正整数数集
// 必须要有length属性，默认值为0
let arrayLike = {
    0: 'lala',
    1: 'haha',
    2: 'hehe',
    length: 3
}
// 使用ES6方式将伪数组转换成数组
// from
let arr1 = Array.from(arrayLike)
arr1.push('lolo')
console.log(arr1);

/******************************************/
// 使用Array构造器传参生成数组，会因为传参数量不同而参数不同的结果
let a1 = new Array(1, 2)
let a2 = new Array(3)
console.log(a1); // [1,2]
console.log(a2); // 长度为3的空数组

// 为了解决上面构造器参数问题，使用of方法解决
let a3 = Array.of(1, 2)
let a4 = Array.of(3)
console.log(a3); // [1,2]
console.log(a4); // [3]
/** of 方法可以拼装任何类型变成一个数组 */

// copyWithin
// 从数组的指定位置拷贝元素到数组的另一个指定位置中
/* 
参数：
target：必需。复制到指定目标索引位置。
start：可选。元素复制的起始位置。
end：可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
*/
let c1 = [1, 2, 3, 4, 5, 6]
console.log(c1.copyWithin(1, 3));
// 根据参数定义，将索引3的位置到末位的元素，替换从索引1开始的位置。

// fill，填充数组
// 填充abc字符串给长度为3的数组
let f1 = new Array(3).fill('abc')
console.log(f1);

// fill也可以做数组元素值的替换
/* 
参数：
value：必需。填充的值。
start：可选。开始填充位置。
end：可选。停止填充位置 (默认为 array.length)
*/
let f2 = [1, 2, 3, 4, 5]
f2.fill('abc', 1, 3)
console.log(f2); // [1, "abc", "abc", 4, 5]
f2.fill('n')
console.log(f2); // ["n", "n", "n", "n", "n"]

// includes，ES6用来判断数组里面是否包含指定元素
// ES5中，indexOf有什么弊端
let i1 = [1, 2, 3, NaN]
console.log(i1.indexOf(NaN)); // -1
// 造成上面的原因是因为NaN不等于NaN
// console.log(NaN == NaN) // 输出false
// 我们来使用includes来判断
console.log(i1.includes(2)); // true
console.log(i1.includes(NaN)); // true
console.log(i1.includes(6)); // false

console.log('---------------------------------------------------------');
let test = [1, 2, '123', [4, 5], {
    name: '123'
}]
console.log(test.includes([4, 5])); // false
console.log(test.includes({
    name: '123'
})); // false
console.log(test.indexOf([4, 5])); // -1
console.log(test.indexOf({
    name: '123'
})); // -1
// 引用类型都无法检测