/* 
Reflect 映射

将Object属于语言内部的方法放到Reflect上
修改某些Object方法的返回结果，让其变得更合理
让Object操作编程函数行为
Reflect对象的方法与Proxy对象的方法一一对应
*/

// Object的一些方法抽离到Reflect，减小Object体量，增加代码可读性
let obj = {}
let newVal = ''
Reflect.defineProperty(obj, 'name', {
    get() {
        console.log('get');
        return newVal
    },
    set(val) {
        console.log('set');
        newVal = val
    }
})

// 让原有方法增加返回值，让方法更加合理
// Object.defineProperty() // 没有返回值
// Reflect.defineProperty() // 返回布尔值

// 以前的命令式操作改为函数式操作
console.log('assign' in Object); // true
console.log(Reflect.has(Object, 'assign')); // true


// Reflect和Proxy一一对应
let arr = [1, 2, 3]
arr = new Proxy(arr, {
    get(target, prop) {
        console.log(`target：${target}  prop：${prop}`);
        // return prop in target ? target[prop] : 'error'
        return prop in target ? Reflect.get(target, prop) : 'error'
    }
    // 其他set等钩子也是一一对应
})
console.log(arr[1]);