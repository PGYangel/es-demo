/* 
函数的参数

参数的默认值
与解构赋值结合
length属性
作用域
函数的name属性
*/

// ES5设置函数参数默认值
// 这样设置不够严谨且麻烦
function foo(x, y) {
    y = y || 'world';
    console.log(x, y);
}
foo('hello', 'girl');
foo('hello', 0); // 由于0理解成false，所以y赋值为world

// ES6设置函数参数默认值
function foo2(x, y = 'world') {
    console.log(x, y);
}
foo2('hello', 0)

// 参数变量是默认声明，下面不能用let，const重复声明
/* 
function foo(x=5){
    let x =1
}
*/

// 参数不能够重名
/* 
function foo(x,x,y){}
*/

// 默认参数的位置要在全部无默认值参数之后
/* 
functon foo(x,y,z=5){}
*/

// 与解构赋值结合，看解构赋值篇章内容即可
// 参数默认值配合解构赋值，可以使代码可读性更强
/* 
// 如自定义一个ajax函数
function ajax(url,{
    body = '',
    method = 'GET',
    header ={}
}){}
*/

// length属性返回的是没有指定默认值参数的个数
function lfoo(x, y, z = 2) {

}
console.log(lfoo.length); // 2

// 作用域例子
/* 
let x = 1
function foo(x, y = x) {
    console.log(y)
}
foo(2)

function foo2(y = x) {
    let x = 2
    console.log(y)
}
foo2() 
*/

// 函数的name属性
function fname() {}
console.log(fname.name); // fname
console.log((new Function).name); // anonymous 匿名
console.log(fname.bind({}).name); // bound fname
console.log((function () {}).bind({}).name); // bound