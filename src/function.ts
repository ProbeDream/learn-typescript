/* 函数定义 */
function add3(x:number,y:number){
    return x + y ;
}
let add4:(x:number,y:number)=>number

type add5 = (x:number,y:number)=>number;

interface add6 {
    (x:number,y:number):number
}

function add7(x:number,y?:number){
    return y? x+y:x;
}
function add8(x:number,y=0,z:number,q=1){
    return x + y + z + q;
}

function add9(x:number,...rest:Array<number>){
    return x + rest.reduce((previous,current)=>previous+current);
}
console.log(add9(1,1,2,3,4,5,6));

/* 函数重载 */
function add10(...rest:Array<number>):number;
function add10(...rest:Array<string>):string;
function add10(...rest:Array<any>){
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((previous,current)=>previous+current);   
    }
    if (typeof first === 'string') {
        return rest.join("");
    }
}
