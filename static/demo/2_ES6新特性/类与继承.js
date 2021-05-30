/* 
ES5 中的类与继承
*/
//类
function People(name, age) {
    // this指向当前实例化对象
    console.log(this);
    // 实例属性
    this.name = name
    this.age = age
    // 每一次new实例的时候累计到People.count当中
    People.count++

    // 不建议将方法写在类里面，
    // 原因是每次实例化类的时候，方法也会被New实例
    /* 
    this.show = function(){
        console.log('只是this.show方法')
    }
    */
}
// 实例方法
// 建议将方法写到类的原型当中，这样每次New一个实例就不会New一次方法
People.prototype.show = function () {
    console.log('pshow');
}

// 静态属性
// 不需要new实例化也可以使用
People.count = 0

// 静态方法
// 使用的方法跟new 实例化没有关系,可以直接使用
// 例如Math类
let m = Math.max(4, 5)
let r = Math.random()
// 创建静态方法
People.getCount = function () {
    // 由于静态方法不用实例化，所以this指向构造函数People
    console.log(this);
    console.log('当前有' + People.count)
}

let p1 = new People('张三', 18);
let p2 = new People('李四', 18);
console.log(p1);
console.log(People.count);
People.getCount()

console.log('-------------------------------------------------------------------------------')

// 继承
// 父类
function Animal(name) {
    this.name = name
}
Animal.prototype.showName = function () {
    console.log('动物名是：' + this.name);
}
// 子类
function Dog(name, color) {
    Animal.call(this, name) // 继承属性：将Dog的this和name传递给Animal类
    this.color = color
}
// 继承方法
Dog.prototype = new Animal()
Dog.prototype.constuctor = Dog

let d1 = new Dog('来福', '黑色')
console.log(d1);
d1.showName();

console.log('-------------------------------------------------------------------------------')

/* 
ES6 中的类与继承

class
extends
constructor
static
super
get / set
*/

// 类
class People2 {
    // 构造函数
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
        this._sex = -1

        People2.count++
    }
    // 使用get和set也可以定义实例属性
    // 定义时必须要在类的顶层位置进行定义
    // 定义后在console打印类实例，发现定义的属性是半透明，隐藏属性
    // 只定义get表示属性只读，只定义set表示属性只写
    // 这种属性应用场景一般都是需要对属性做一定的业务逻辑判断进行定义
    get sex() {
        return this._sex
    }

    set sex(val) {
        this._sex = val
    }

    // 实例方法
    showName() {
        console.log('showName' + this.name);
    }

    // 静态方法
    static getCount() {
        console.log('getCount：' + People2.count)
    }
}

// 静态属性
// ES6里面暂时不支持在类里面用static进行定义静态属性
People2.count = 0;

let p3 = new People2('王五', 18)
p3.sex = '女'
console.log(p3);
People2.getCount()

// 继承
class Coder extends People2 {
    constructor(name, age, company) {
        //继承父类属性,super
        super(name, age)

        this.company = company
    }
    showCompany() {
        console.log('showCompany' + this.company);
    }
}

let c1 = new Coder('王大锤', 18, '谷歌')
console.log(c1);
c1.showName()
c1.showCompany()