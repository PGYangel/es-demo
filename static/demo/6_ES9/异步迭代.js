/* 
异步迭代：
for await of
Symbol.asyncIterator
*/
function getPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: time,
                done: false
            })
        }, time)
    })
}

const arr = [
    getPromise(1000),
    getPromise(2000),
    getPromise(3000),
]
arr[Symbol.asyncIterator] = function () {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? arr[nextIndex++] :
                Promise.resolve({
                    value: undefined,
                    done: true
                })
        }
    }
}

async function test() {
    for await (let item of arr) {
        // 异步操作执行完之后才进入下一个循环进行异步操作
        // 不然会直接返回Promise对象
        console.log(item);
    }
}
test()