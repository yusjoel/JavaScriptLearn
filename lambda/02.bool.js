function functionName(fun) {
    var ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
}

function a () {
    return "a";
}

function b () {
    return "b"
}

// 定义True 和 False,
// 在Lambda演算中, 函数是第一类, True和False都是函数
// T = λ x y. x
// F = λ x y. y
// 这是使用多元函数定义, 具体的实现见下, 应该很好理解
let T = (x, y) => x;
let F = (x, y) => y;

console.log("T/F多元函数的定义")
console.log("T a b = " + T(a, b)());
console.log("F a b = " + F(a, b)());

// T函数选择第一个参数, F函数选择第二个参数

// 多元函数转成一元函数
// T = λ x. (λ y. x)
// F = λ x. (λ y. y)
// λ y. x 叫做常函数, 也就是对于任意y, 总是返回x
// λ y. y = λ x. x, 叫做恒等函数, 对于任意x, 总是返回x

// 用js实现代码如下
//let True = x => y => x;
//let False = x => y => y;

// 这里用function定义是为了可以打印函数名

function True(x) {
    return y => x;
}

function False(x) {
    return y => y;
}

// Lambda:  T a b
// js:      T(a)(b)

console.log("T/F一元函数的定义")
console.log("True a b = " + True(a)(b)());
console.log("False a b = " + False(a)(b)());

// 定义三个基本操作
// Not = λ x. x F T
// Not T = T F T = F
// Not F = F F T = T
let Not = x => x(False)(True);

console.log("Not")
console.log("Not True = " + functionName(Not(True)));
console.log("Not False = " + functionName(Not(False)));

// And = λ x y. x y F
// And T y = T y F = y
// And F y = F y F = F
// And = λ x. (λ y. x y F)
let And = x => y => x(y)(False);

console.log("And")
console.log("And True True = " + functionName(And(True)(True)));
console.log("And True False = " + functionName(And(True)(False)));
console.log("And False True = " + functionName(And(False)(True)));
console.log("And False False = " + functionName(And(False)(False)));

// Or = λ x y. x T y
// Or T y = T T y = T
// Or F y = F T y = y
// Or = λ x. (λ y. x T y)
let Or = x => y => x(True)(y);
console.log("Or")
console.log("Or True True = " + functionName(Or(True)(True)));
console.log("Or True False = " + functionName(Or(True)(False)));
console.log("Or False True = " + functionName(Or(False)(True)));
console.log("Or False False = " + functionName(Or(False)(False)));