/* 
迭代器 Iterator
是一种接口机制，为各种不同的数据结构提供统一访问的机制
主要供for...of消费
一句话：不支持遍历的数据结构“可遍历”
*/

// 具备Symbol.iterator类型的数据即可遍历
let map = new Map()
map.set('name', '张三')
map.set('age', 18)
map.set('school', '清华')
let it = map[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 原生具备Iterator接口的数据结构有：
/* 
Array
Map
Set
String
TypedArray
函数的arguments对象
NodeList对象
*/

// 可迭代协议：Symbol.iterator
// 迭代器协议：return { next(){ return {value,done} } }
let courses = {
    allCourse: {
        a: ['a', 'aa', 'aaa', 'aaaa'],
        b: ['b', 'bb', 'bbb', 'bbbb'],
        c: ['c', 'cc', 'ccc', 'cccc']
    }
}
courses[Symbol.iterator] = function () {
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    return {
        next() {
            if (!values.length) {
                if (keys.length) {
                    values = allCourse[keys[0]]
                    keys.shift()
                }
            }
            return {
                done: !values.length,
                value: values.shift()
            }
        }
    }
}
for (let item of courses) {
    console.log(item);
}