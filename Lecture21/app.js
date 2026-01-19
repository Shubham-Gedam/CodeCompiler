//Prototype & Inheritence in JS


// const arr = [1,2,3];

// Array.prototype.sayHello = function(){
//     return "sayHollo...."
// };
// Array.prototype.last = function(){
//     return this[this.length - 1]
// }
// console.log(arr.last());

// console.log(arr.__proto__); // this is called prototype chaning



function person(name){
    this.name = name
}
person.prototype.greet =function() {
    return `hello ${this.name}`
}
const user = new person("shubh");
console.log(user.greet());
console.log(user.__proto__);



