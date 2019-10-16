/* 数字枚举 */
enum Role {
    Reporter, Developer, Maintainer, Owner, Guest
}
/* 字符串枚举 */
enum Message {
    Success = '恭喜你,成功了哦!',
    Fail = "很抱歉失败了!"
}
/* 异构枚举 */
enum Answer {
    N, Y = 'Yes'
}

/* 枚举成员 */
enum Char {
    a,
    b = Char.a,
    c = 1 + 3,
    d = Math.random(),
    e = '123'.length,
    f = 4
}

/* 常量枚举 */
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

/* 枚举类型 */
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3


let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3

let g1: G = G.a
let g2: G.a = G.a