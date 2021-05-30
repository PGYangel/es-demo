/* 
如何把一个对象复制给另外一个对象

Object.assign() ？
*/

// Object.assign，只是进行了浅拷贝，并没有进行深拷贝。
// 而且会在复杂结构当中会丢失属性，如下代码
let target = {
    a: {
        b: {
            c: 3
        },
        e: 4,
        f: 5,
        g: 6
    }
}
let source = {
    a: {
        b: {
            c: 1
        },
        e: 2,
        f: 3
    }
}
Object.assign(target, source)
console.log(target); // g属性被丢失了。

// 使用JSON.stringify()和JSON.parse()来实现深拷贝
// 这个方法只适合对一般object对象进行，如果有function等，则无法成功转换。
let obj = JSON.parse(JSON.stringify(target));
console.log(obj);