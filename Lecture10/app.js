{/*Normal object */}
// const Person = {
//     name: "shubh",
//     age: 23,
//     getData: function(){
//         return this.name
//     }
// }
// console.log(Person.getData());

const Person = new Object();
Person.name = 'shubh'
console.log(Person); {/* { name: 'shubh' } */}


const Person = new Object();
Person.name = 'shubh'
console.log(Person instanceof Object ); {/* true */}







const Person = {
    name: "shubh",
    age: 23,
    getData: function(){
        return this.name
    }
}

// console.log("name" in Person);
// console.log("toString" in Person);
// console.log(Person.hasOwnProperty("toString") );

// for(let key in Person){
//     console.log(key);
    
// }

for(let key in Person){
    console.log(key + "" + Person[key]);
    
}

console.log(Object.keys(Person)); {/* Output in String */}
console.log(Object.values(Person)); {/* Output in String */}
console.log(Object.entries(Person));

for(const [key, value] of Object.entries(Person)){
    console.log(key, value);
    
}
