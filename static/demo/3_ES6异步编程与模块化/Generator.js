// 基本使用
// function后面加个*号
function* foo() {
    for (let i = 0; i < 3; i++) {
        yield i; // yield不能作为构造函数去使用，只能在generator函数里面直接使用
    }
}
// generator函数需要手动执行
let f = foo()
console.log(f.next()); // {value: 0, done: false},  value当前值，done表示当前generator函数有没执行完
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 2, done: false}
console.log(f.next()); // {value: undefined, done: true}

// next的参数是上一条yield的返回值
function* gen(x) {
    let y = 2 * (yield(x + 1));
    let z = yield(y / 3);
    return x + y + z;
}
// let g = gen(5)
// console.log(g.next()); // 6
// console.log(g.next()); // NaN
// console.log(g.next()); // NaN
let g = gen(5)
console.log(g.next()); //6
console.log(g.next(12)); // y=24   8
console.log(g.next(13)); // z=13 x=5 42

// 使用generator函数实现每次输出7的倍数
function* count(x = 1) {
    while (true) {
        if (x % 7 === 0) {
            yield x
        }
        x++
    }
}
let n = count()
console.log(n.next().value); // 7
console.log(n.next().value); // 14
console.log(n.next().value); // 21