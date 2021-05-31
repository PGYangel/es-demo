/* 
Proxy代理

常用拦截方法
*/

// ES5拦截
let obj = {}
let newVal = ''
Object.defineProperty(obj, 'name', {
    get() {
        console.log('get');
        return newVal
    },
    set(val) {
        console.log('set');
        newVal = val
    }
})
obj.name = '张三'
console.log(obj.name);

// proxy
let pObj = {}
let p = new Proxy(pObj, {})
p.name = '李四'
console.log(pObj.name); // pObj的属性值已经通过p代理写入值

// proxy常用的拦截钩子
// get
let arr = [1, 2, 3]
arr = new Proxy(arr, {
    get(target, prop) {
        console.log(`target：${target}  prop：${prop}`);
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[1]);

let dict = {
    'name': '王五',
    'age': 18
}
dict = new Proxy(dict, {
    get(target, prop) {
        console.log(`target：${target}  prop：${prop}`);
        return prop in target ? target[prop] : prop;
    }
})
console.log(dict['name']); // 王五
console.log(dict['class']); // class

// set
let arr2 = []
arr2 = new Proxy(arr2, {
    set(target, prop, val) {
        if (typeof val === 'number') {
            target[prop] = val
            return true
        } else {
            return false
        }
    }
})
arr2.push(5)
arr2.push(6)
console.log(arr2[0], arr2[1]);

// has
let range = {
    start: 1,
    end: 5
}

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end
    }
})
console.log(2 in range); // true
console.log(9 in range); // false

// ownKeys，循环遍历的时候进行拦截
// 现在我们把_开头的属性为似有属性，不进行遍历出来
// deleteProperty，删除拦截
// 我们禁止_开头的似有属性删除
let user = {
    name: '张三',
    age: 18,
    _password: '***'
}
user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    },
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('不可删除')
        } else {
            delete target[prop]
            return true
        }
    }
})
for (let key in user) {
    console.log(key);
}

try {
    delete user._password;
} catch (e) {
    console.log(e.message);
}

// apply，拦截函数调用、call、apply的操作
let sum = (...args) => {
    let num = 0;
    args.forEach(item => {
        num += item
    })
    return num
}
sum = new Proxy(sum, {
    apply(target, ctx, args) {
        return target(...args) * 2
    }
})
console.log(sum(1, 2));
console.log(sum.call(null, 1, 2));
console.log(sum.apply(null, [1, 2]));

// construct，拦截new
let People = class {
    constructor(name) {
        this.name = name
    }
}
People = new Proxy(People, {
    construct(target, args, newTarget) {
        console.log('construct');
        return new target(...args)
    }
})
console.log(new People('张三'));