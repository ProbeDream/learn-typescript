/*
 * X（目标类型） = Y（源类型），X 兼容 Y
 */

let s: string = 'a'
// str = null

// 接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let xx: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
xx = y
// y = x

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

// 1)参数个数
let handler1 = (a: number) => { }
hof(handler1)
let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2)

// 可选参数和剩余参数
let a = (p1: number, p2: number) => { }
let bb = (p1?: number, p2?: number) => { }
let c = (...args: number[]) => { }
a = bb
a = c
// b = a
// b = c
c = a
c = bb

// 2)参数类型
let handler3 = (a: string) => { }
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }
p3d = p2d
// p2d = p23

// 3) 返回值类型
let ff = () => ({ name: 'Alice' })
let g = () => ({ name: 'Alice', location: 'Beijing' })
ff = g
// g = f

// 函数重载
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any { }
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 1
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 类兼容性
class AA {
    constructor(p: number, q: number) { }
    id: number = 1
    private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) { }
    id: number = 2
    private name: string = ''
}
class C extends AA { }
let aa = new AA(1, 2)
let bbb = new B(1)
// aa = bb
// bb = aa
let cc = new C(1, 2)
aa = cc
cc = aa

// 泛型兼容性
interface Empty<T> {
    // value: T
}
let obj12: Empty<number> = {};
let obj22: Empty<string> = {};
obj12 = obj22

let log1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log2 = <U>(y: U): U => {
    console.log('y')
    return y
}
log1 = log2
