class Pesron {
    #name //Private variable

    constructor(name){
        this.#name = name;
    }
    get name(){
        return this.#name;
    }
    set name (newName){
        if(newName){
            this.#name = newName
        }else{
            console.log("new name can not be empty");
        }
    }
}

// const person = new Pesron('shubh')
// console.log(person.name);

// person.name = 'ruduu';
// console.log(person.name);



// class A {
//     constructor(name){
//         this.name = name;
//     }
// }

// class B extends A {
//     getDetails(){
//         return `here is ${this.name}`
//     }
// }

// const obj = new B("Shubh")
// console.log(obj.getDetails());


class user {
    #logAccess(){
        console.log("Log Access...");
    }
    showProfile(){
        this.#logAccess()
        console.log("showProfile...");
        
    }
}
const us = new user()
us.showProfile()



class A {
    sayA(){
        console.log("sayA");
    }
}
class B extends A {
    sayB(){
        console.log("SayB");
    }
}
class C extends B {
    sayC(){
        console.log("sayC");
        
    }
}

const obj = new C();
obj.sayC()
obj.sayB()
obj.sayA()




//mixins

class Animal {
    eat(){
        console.log("Eating..");
    }
}
{/*Mixins  */}
const flyable = (Base)=> 
    class extends Base{
        fly(){
            console.log("flying");
        }
    }

class Bird extends flyable(Animal){
    bird(){
        console.log("Bird...");
        
    }
}
const myBird = new Bird()

myBird.fly()
myBird.eat()
myBird.bird()