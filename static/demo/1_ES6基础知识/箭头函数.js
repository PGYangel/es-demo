/* 
箭头函数

this指向定义时所在的对象，而不是调用时所在的对象
不可以当做构造函数
不可以使用arguments对象
*/

// ES5中定义函数的两种方式
function fn1() {
    console.log('fn1');
}
let fn2 = function () {
    console.log('fn2');
}

/* 
fn1和fn2之间区别是：
fn1编译器会预编译，调用fn1无论是在定义的前面还是后面都能正常调用。
fn2是通过声明形式定义，按照声明变量的规则只能在声明后面调用。
*/

// 使用箭头函数定义
/* 
箭头左边是参数
参数只有一个时可忽略括号
箭头右边是函数体
函数体只有一行且忽略了大括号，相当于直接return函数体结果
*/
let fn3 = (x) => {
    return x
}
let fn4 = x => x

// this指向
let html = document.querySelector('html')
// 下面的this都是调用时候的对象
html.addEventListener('click', function () {
    console.log(this); // html标签
    setTimeout(function () {
        console.log(this); // window对象
    }, 100)

    // call apply bind 可以改变this指向
    setTimeout(function () {
        console.log(this); // html标签
    }.bind(this), 200)

    // 箭头函数的this是定义时候的this，而不是调用时候的this
    // 其实箭头函数没有this，而是继承了上下文的this
    setTimeout(() => {
        console.log(this); // html标签
    }, 300)
})

// 不能使用arguments我们用rest参数来代替
let fun = (...args) => {
    console.log(args);
}
fun(1, 2, 3)