interface Human{
    name:string;
    run():void;
}
class Person implements Human{
    constructor(name:string){
        this.name = name;
    }
    name:string;
    run(){console.log(`${this.name} run run run!`);}
    sleep(){console.log(`${this.name} please quick sleep!`);}
}

const jerry:Person = new Person('Jerry');
jerry.run();
jerry.sleep();

/* 
 接口可以继承接口 类只能够实现接口!
*/

