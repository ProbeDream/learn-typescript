class Dog{
    constructor(public name:string){
        this.name = name;
    }
    run(){console.log(`我就是要 run run run!`);
    }
}

class A extends Dog{
    constructor(name:string,public color:string){
        super(name);
        this.color = color;
    }
    private age:number = 18;
    say(){console.log(`my name is ${this.name} this color is ${this.color} and my age ${this.age}`)}
}
const b = new A('Jerry','Blue');
b.run();

/* 
    其中讲到了对应的 继承 以及对应的 修饰符 private public protected readonly 等修饰符!
*/