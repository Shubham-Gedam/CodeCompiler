// Normal function 

// function greet (){
//     console.log("hello js");
    
// }
// greet()


// Arrow Function

// const greet = () =>{
//     console.log("hello js");
    
// }
// greet();

// const abc = () => 'hello react'
// const text = abc()
// console.log(text);



const user ={
    name : "helllo",
    sayHi: function(){
        console.log("js",this.name);
        
    }
}
user.sayHi()

name = "node";

const user1 ={
    name : "helllo",
    sayHi: () => {
        console.log("js", name);
        
    }
}
user1.sayHi()
