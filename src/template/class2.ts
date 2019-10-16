abstract class Animal{
    say(){
        console.log(`this is about say method!`);
    }
}

class Dog1 extends Animal{
    constructor(public name:string){
        super();
        this.name = name;
    }
    sleep(){
        console.log(`${this.name} is sleep!`);
    }
}

class Husky extends Animal{
    constructor(public name:string){
        super();
        this.name = name;
    }
    sleep(){
        console.log(`${this.name} is sleep`);
    }
}

const bigDog = new Dog1('big Dog');
const bigCat = new Husky('big cat');

const animals :Animal[] = [bigCat,bigDog];



class WorkFlow {
    setup01(){return this;}
    setup02(){return this;}
}
class MyFlow extends WorkFlow{
    constructor(){
        super();
    }
    next(){
        return this;
    }
}
console.log(new MyFlow().next().setup01());

