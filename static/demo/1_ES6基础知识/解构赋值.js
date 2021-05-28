/* 
解构赋值：

按照一定模式，从数组和对象中提取值，对变量进行赋值
数组解构
对象解构
字符串解构
应用
*/

// 非解构赋值数组
let arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c);
//解构赋值数组
let [d, e, f] = arr;
console.log(d, e, f);

// 复杂的解构
// let [g, h, [i, j]] = [1, 2, [3, 4]];
// console.log(g, h, i, j); //输出1 2 3 4
// let [g, h, [i]] = [1, 2, [3, 4]];
// console.log(i); //输出3
// let [g,h,i,j=5] = [1,2,[3,4],6]

// 综上可看出解构赋值就是对应数据结构对应给变量赋值
// 解构赋值是一种惰性赋值，如果没传值，那么变量就是undefined或者默认值，传了值就是对应的值

// 对象解构赋值
let user = {
  name: "张三",
  age: 18,
};
let { age, name } = user;
console.log(name, age);
// 对象解构是通过对象key去一一对应，所以解构赋值的时候顺序混乱也能对应上

// 使用别名进行解构
let { age: uage, name: uname } = user;
console.log(uage, uname);

// 字符串解构赋值
let str = "ibccq";
// for(let i =0;i<str.length;i++){
//     console.log(str[i]);
// }
// 根据上面的for循环可以类比字符串解构类似于数组解构
let [s1, s2, s3, s4, s5] = str;
console.log(s1, s2, s3, s4, s5);

// 应用场景
// 1、简化赋值代码
// 2、默认值的赋值使用

//默认赋值使用例如方法传参解构
function foo([a, b, c]) {
  console.log(a, b, c);
}
foo([1, 2, 3]);

function foo2({ name, age, school = "清华" }) {
  console.log(name, age, school);
}
foo2({
  name: "掌声那",
  age: 18,
});

function foo3() {
  return {
    name: "lala",
    age: 18,
  };
}
let { name: fname, age: fage } = foo3();
console.log(fname, fage);

// json
let json = '{"a":"hello","b":"world"}';
let { a: ja, b: jb } = JSON.parse(json);
console.log(ja, jb);
