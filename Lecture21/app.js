//Prototype & Inheritence in JS


const arr = [1,2,3];

Array.prototype.sayHello = function(){
    return "sayHollo...."
};
Array.prototype.last = function(){
    return this[this.length - 1]
}
console.log(arr.last());

// console.log(arr.__proto__); // this is called prototype chaning



function person(name){
    this.name = name
}
person.prototype.greet =function() {
    return `hello ${this.name}`
}
const user = new person("shubh");
console.log(user.greet());
console.log(user.__proto__); //view in browser console


// using Object.create() for inheritance
// const userModel = {
//     sayHi: function (){
//         return `hello ${this.name}`
//     }
// }
// // // const user2 = Object.create(userModel)
// const user2 = Object.assign({},userModel) //Shallow copy
// user2.name = 'shubh'
// console.log(user2.sayHi());


function Animal(name){
    this.name = name;
}
Animal.prototype.walk = function(){
    return `${this.name} is walking`;
}
function Dog(name){
    this.name = name;
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function(){
    return `${this.name} is barking`
}
const dog = new Dog("tommy")
console.log(dog.bark());
console.log(dog.walk());



//Es6 

class Animal {
    constructor(name){
        this.name = name;
    }
    walk(){
        return `${this.name} is walking`
    }
}
class Dog extends Animal {
    
    bark(){
        return `${this.name} is barking`
    }
}
const dog1 = new Dog("tommy")
console.log(dog1.bark());
console.log(dog1.walk());