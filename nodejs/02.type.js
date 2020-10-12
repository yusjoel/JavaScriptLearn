// 数据类型, 只有一种, 不区分整型/长整型/单精度浮点型/双精度浮点型

var n = 1
var l = 9876543210
var f = 3.14
var d = 0.0123456789

console.log("number")
console.log("n = " + n + " is " + typeof n);
console.log("l = " + l + " is " + typeof l);
console.log("f = " + f + " is " + typeof f);
console.log("d = " + d + " is " + typeof d);

// 字符串型, 可以用"", 也可以用''
var s1 = "string"
var s2 = "'string'"
var s3 = '"string"'

console.log()
console.log("string")
console.log("s1 = " + s1 + " is " + typeof s1);
console.log("s2 = " + s2 + " is " + typeof s2);
console.log("s3 = " + s3 + " is " + typeof s3);

// 布尔型, true/false
var yes = true;
var no = false;
console.log()
console.log("boolean")
console.log("yes = " + yes + " is " + typeof yes);
console.log("no = " + no + " is " + typeof no);

// 数组型
var a1 = new Array()
a1[0] = 1
a1[1] = 2
a1[2] = 3

var a2 = new Array("one", "two", "three")
var a3 = [1, "two", false]

console.log()
console.log("array is object")
console.log("a1 = " + a1 + " is " + typeof a1);
console.log("a2 = " + a2 + " is " + typeof a2);
console.log("a3 = " + a3 + " is " + typeof a3);

// 对象类型
var person = {
    firstName : "Bill",
    lastName : "Gate",
    sex : "male"
}
console.log()
console.log("object")
console.log("person = " + person + " is " + typeof person);
console.log("person.firstName = " + person.firstName);
console.log("person[\"lastName\"] = " + person["lastName"]);

// 动态类型
console.log()
console.log("dynamic type")
var x
console.log("x = " + x + " is " + typeof x);
x = 1
console.log("x = " + x + " is " + typeof x);
x = "x" + x
console.log("x = " + x + " is " + typeof x);
var x
console.log("redefine x")
console.log("x = " + x + " is " + typeof x);
x = [x]
console.log("x = " + x + " is " + typeof x);
x = { "x" : x }
console.log("x.x = " + x.x + " is " + typeof x);

// 其他
console.log()
console.log("misc")
// 可以不定义直接使用
x = 1
y = 2
z = x + y
console.log("z = " + z + " is " + typeof z);

var b = new Boolean
console.log("b = " + b + " is " + typeof b);