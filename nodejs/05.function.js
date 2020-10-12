// 最简单的函数
function sayHelloWorld() {
    console.log("Hello world!");
}

// 带参数
function sayHi(personName) {
    console.log("Hi " + personName);
}

// 带参数和返回值
function sum(a, b) {
    return a + b;
}

// 测试
sayHelloWorld();
sayHi("Node.js");
console.log("1 + 2 = " + sum(1, 2));

// 局部变量和全局变量
// 函数外定义的变量, 都是全局变量
var g = 1
var x = 2

function foo() {
    // 同名局部变量, 不会影响到全局变量
    var x = 10
    // 不使用var定义的变量, 默认为全局变量
    y = 20
    g++
    return g + x + y;
}

console.log("global & local variable")
console.log("g = " + g);
console.log("x = " + x);
//console.log("y = " + y);  // ReferenceError: y is not defined
console.log("foo() = " + foo());
console.log("g = " + g);
console.log("x = " + x);
console.log("y = " + y);

