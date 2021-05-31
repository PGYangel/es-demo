// 基本用法
// resolve，成功
// reject，失败
let p = new Promise((resolve, reject) => {
    // Promise里面的非异步代码是立刻执行
    console.log(1);
    setTimeout(() => {
        if (true) {
            resolve('成功')
        } else {
            reject('失败')
        }
    })
})
console.log(2);
p.then((res) => {
    console.log(3);
    console.log(res);
}).catch((e) => {
    console.log(e);
})

// Promise的三种状态，三种状态是不可逆的
/* 
new Promise：pending
resolve：fulfilled
reject：rejected
*/
// 下面代码输出2，永远不会输出1，所以状态不可逆
let p2 = new Promise((resolve, reject) => {
    reject(2);
    resolve(1);
})
p2.then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
})

// 封装一个简易的Promise公用方法
function getPromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('setTimeout');
            resolve(url)
        })
    })
}

getPromise('a.json')
    .then(res => {
        console.log(res);
        return getPromise('b.json');
    })
    .then(res => {
        console.log(res);
        return getPromise('c.json');
    })
    .then(res => {
        console.log(res);
    })

/* 
Promise静态方法

Promise.resolve()
Promise.reject()
Promise.all()
Promise.race()
*/

// 使用all来一次性执行多个Promise
// all方法里面只要有一个Promise失败，那么所有都失败直接进入catch里面
Promise.all(
    [
        getPromise('1.json'),
        getPromise('2.json'),
        getPromise('3.json')
    ]
).then(res => {
    console.log(res); // 所有Promise的res拼接成数组
})

// race，比速度
// 只要其中一个Promise完成，那么就会认为整个都完成
// 只要有一个失败，跟all一样认为所有都失败
Promise.race(
    [
        getPromise('1.json'),
        getPromise('2.json'),
        getPromise('3.json')
    ]
).then(res => {
    console.log(res); // 返回第一个完成的Promise的res
})