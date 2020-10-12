// 语法: λ x. P
// 可以认为λ定义一个函数, 点号左侧是参数部分, 右侧是表达式部分
// 如 λ x. x+1
// 用js实现就是 x => x+1
let f1 = x => x + 1;
log(f1, "f1", 1)

// 语法: P x
// 相当于将x作为参数传入P
// 恒等式: P = λ x. P x
function foo(x) {
    return x+1;
}

let bar = x => foo(x);


function log(func, funcname, param) {
    console.log(funcname + " = " + func  + "\n" + funcname + "("+param + ") = " + func(param));
}