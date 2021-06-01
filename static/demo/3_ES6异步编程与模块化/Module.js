/* 
模块化规范有：
CommonJS：Node.js
AMD：require.js
CMD：sea.js
ES6
*/

// ES6规范
// 导出名字和引用名字必须完全一样
import {
    a,
    b,
    sum,
    obj
} from './Module-1'
console.log(a);
console.log(b);
console.log(sum(1, 2));
console.log(obj);

// 用as关键字起别名
import {
    a as aa
} from './Module-1'
console.log(aa);

// 有默认导出
// 默认导出的名字可以随意命名，例如命名为de
// 非默认导出的需要加{}包裹，规则如上名基础使用一样
import de, {
    str
} from './Module-3'
console.log(de);

// 引用所有导出对象用*号
import * as mod from './Module-3'