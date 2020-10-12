// 不动点定义: f(x) = x

// a = λ x. f (x x)
// Y = λ f. a a
// Y = λ f. (λ x. f (x x)) (λ x. f (x x))
// 对于任意 λ 表达式 g，总存在不动点 x = Y g，使关系 g x = x 成立
// g (Y g) = Y g
// Y g = a a = (λ x. g (x x)) a
// = g (a a) = g Y g

// 利用不动点的特性可以进行递归
// 设计一个辅助函数g = λ f x. P, F = Y g
// F x = Y g x = g (Y g) x
// 此时设计P = f (Inc X), 则上面的公式等于
// Y g (Inc X), 最后的结果会不停的对X求后继

//

// X = λ f. (λ x. x x) (λ x. f (x x))
// Θ = (λ x y. y (x x y)) (λ x y. y (x x y))