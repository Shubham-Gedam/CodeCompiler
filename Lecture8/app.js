class Pesron {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name (newName){
        if(newName){
            this._name = newName
        }else{
            console.log("new name can not be empty");
        }
    }
}

const person = new Pesron('shubh')
console.log(person.name);

person.name = 'js';
console.log(person.name);

person.name = '';
