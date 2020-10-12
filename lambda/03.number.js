// 同样, 自然数也是函数, 定义如下, 使用大写N表示
// 0 = λ f x. x
// 1 = λ f x. f x
// 2 = λ f x. f (f x)
// 3 = λ f x. f (f (f x))
// ...
// N = λ f x. f^n x

// λ f x. x = λ f. (λ x. x)
let Zero = f => x => x;
let One = f => x => f(x);
let Two = f => x => f(f(x));
let Three = f => x => f(f(f(x)));

let f = x => x + 1;
console.log("0 f 1 = " + Zero(f)(0));
console.log("1 f 1 = " + One(f)(0));
console.log("2 f 1 = " + Two(f)(0));
console.log("3 f 1 = " + Three(f)(0));

// N f x, 相当于执行N次f(x)

// 后继算子 Inc N = N + 1
// inc N a b = a (N a b)
// λ N a b. inc N a b = λ N a b. a (N a b)
// 根据定义: P = λ x. P x
// inc = λ N a b. a (N a b)
// = λ N. (λ a. (λ b. a (N a b)))
let Inc = N => a => b => a(N(a)(b));

console.log("Inc 0 = " + Inc(Zero)(f)(0));
console.log("Inc 1 = " + Inc(One)(f)(0));
console.log("Inc 2 = " + Inc(Two)(f)(0));
console.log("Inc 3 = " + Inc(Three)(f)(0));

// 加法算子 Add N M = N + M
// Add N M = N Inc M
// λ N M a b. Add N M a b = λ N M a b. N Inc M a b
// = λ N M a b. N a (M a b)
// 推导出
// Add = λ N M a b. N a (M a b)
//     = λ N (λ M (λ a (λ b. N a (M a b))))
let Add = N => M => a => b => N(a)(M(a)(b));
console.log("Add 2 3 = " + Add(Two)(Three)(f)(0));

// 乘法算子
// Mult = λ N M f x. N (M f) x
// 怎么推导出来的?
// Mult = λ N. (λ M. (λ f. (λx. N (M f) x)))
let Mult = N => M => f => x => N(M(f))(x);

console.log("Mult 0 3 = " + Mult(Zero)(Three)(f)(0));
console.log("Mult 3 2 = " + Mult(Three)(Two)(f)(0));

// 数对算子 Pair:
// Pair = λ N M x. x N M
// [N, M] = Pair N M
// [N, M] T = Pair N M T = T N M = N
let Pair = N => M => x => x(N)(M);

let T = x => y => x;
let F = x => y => y;

// 迭代算子 Phi:
// Phi[N, M] = [N+1, N]
// Phi Pair N M = Pair (Inc N) N
// Phi = λ p. [inc (p T), p T]  (p = pair, T = True, 取左值)
// Phi = λ p. Pair (Inc (p T)) (p T)
let Phi = p => Pair(Inc(p(T)))(p(T));

// 前驱算子 Dec:
// dec = λ N. N Phi [0, 0] F
// 对[0, 0]执行N次Phi算子, 变成[N, N-1], 最后通过F取出右值
let Dec = N => N(Phi)(Pair(Zero)(Zero))(F);

console.log("Dec 1 = " + Dec(One)(f)(0));
console.log("Dec 2 = " + Dec(Two)(f)(0));
console.log("Dec 3 = " + Dec(Three)(f)(0));

// 减法算子 Sub:
// sub = λ N M. M dec N
let Sub = N => M => M(Dec)(N);

console.log("Sub 3 2 = " + Sub(Three)(Two)(f)(0));
console.log("Sub 0 0 = " + Sub(Zero)(Zero)(f)(0));