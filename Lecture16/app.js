const user1 = {
    name: 'shubh',
    age:23
}

const user2 = {
    name: "rudu",
    age : 8
} 


function printDetails (city, country){
    console.log(`Name: ${this.name}, Age: ${this.age}, Location: ${city} ${country}`);
    
}

//call method
printDetails.call(user2, 'delhi', 'india')

// apply Methos
printDetails.apply(user1, ['delhi', 'india'])

// bind Method
const userDeatails =  printDetails.bind(user1,'delhi', 'india' )
userDeatails()



const obj = {
    name: 'kalash',
    greet:function(){
        return `hello, ${this.name}`
    }
}

const greetFun = obj.greet.bind(obj);
console.log(greetFun());

