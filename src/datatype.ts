/* 原始类型 */
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";
/* str = 123; */

/* 数组 */
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "string"];

/* 元祖 */
let tuple: [number, string] = [1, "2"];

/* 联合类型 */
let arr: Array<number | string | null | undefined> = [1,"2",null,undefined];

/* 函数 */
let add = (x: number, y: number) => x + y;
let computed: (x: number, y: number) => number
computed = (x, y) => x + y;

/* 对象 */
let obj: object = { x: 1, y: 2 };
let obj1: { x: number, y: number } = { x: 1, y: 2 };

/* symbol类型 */
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

/* undefined,null */
let un: undefined = undefined;
let nu: null = null;

/* void */
let noReturn = () => { };

/* any */
let x;

/* never */
let error = () => {
    throw new Error("error");
}

let endless = ()=>{
    while (true) {}
}
