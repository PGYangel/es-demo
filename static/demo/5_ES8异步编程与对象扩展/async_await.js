// 基于Generator异步编程语法糖 async await
// async默认输出Promise对象

// 基本使用
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve('abc')
        }, 1000)
    })
}
async function foo() {
    // await关键字一定使用在async里面
    const res = await timeout(); //先执行await里面的方法，执行完毕后再执行后面的方法
    console.log(res);
    console.log(2);
    const res2 = await timeout();
}
foo()