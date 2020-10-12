function log(p) {
    console.log("p = " + p + " is " + typeof p);
    for (x in p) {
        console.log("p[" + x + "] = " + p[x]);
    }
    console.log()
}

// 创建对象的标准写法如下
var p1 = new Object()
p1.firstName = "Bill"
p1.lastName = "Gates"
p1.sex = "male"

console.log("p1")
log(p1);

// 可以把对象想象成一个字典, 你不需要预先定义属性名, 甚至可以使用[]来访问属性
p1["sex"] = "male"

// 也可以用另一种文法来创建实例
var p2 = {
    firstName : "Bill",
    lastName : "Gates",
    sex : "male"
}

console.log("p2")
log(p2);

// 最后可以通过构造函数来创建实例
// 这个时候已经有点像是一个类了
function Person(firstName, lastName, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
}

var p3 = new Person("Bill", "Gates", "male");

console.log("p3")
log(p3);

// 还可以往构造函数里面加方法
function Person2(firstName, lastName, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;

    // 写法1
    // 重载了toString
    this.toString = function () {
        return this.firstName + " " + this.lastName;
    }

    // 写法2
    this.changeName = changeName;

    function changeName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var p4 = new Person2("Bill", "Gates", "male");

console.log("p4")
log(p4);
p4.changeName("Steven", "Jobs");
log(p4)