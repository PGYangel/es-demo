/**
 * 新声明方式：const
 * 1、不属于顶层对象 window
 * 2、不允许重复声明
 * 3、不存在变量提升
 * 4、暂时性死区
 * 5、块级作用域
 */

// ES5里面定义常量
Object.defineProperty(window, "PI", {
  value: 3.14,
  writable: false,
});
console.log(PI);
PI = 5;
console.log(PI);

// const定义常量
/* 
const a = 5; // const定义时就必须赋值
a = 6; //Uncaught TypeError: Assignment to constant variable.
*/

// const 定义的常量是让栈内存空间值不变
// 由于引用类型在定义的时候栈内存保存的是堆内存引用地址，
// 改变引用类型里面的值只会改变堆内存，并不会改变栈内存引用地址，
// 所以引用类型使用const进行定义可改变里面的值
const obj = {
  name: "张三",
  age: 18,
};
console.log(obj);
obj.school = "清华";
console.log(obj);

// 如何定义引用类型为常量不可修改
// 可以使用Object.freeze方法对对象进行冻结
// 注意，freeze里面只能传入对象，不能传入数组
const obj2 = {
  name: "李四",
  age: 20,
};
console.log(obj2);
Object.freeze(obj2);
obj2.school = "清华";
console.log(obj2);

// freeze只能进行浅层的对象冻结
const obj3 = {
  name: "王五",
  age: 20,
  skill: {
    name: "code",
    year: 11,
  },
};
Object.freeze(obj3);
obj3.school = "清华";
obj3.skill.year = 20;
console.log(obj3);
