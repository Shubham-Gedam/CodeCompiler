//1. var hoisting

console.log(a);

var a = 10;
console.log(a);


//2. let Hoisting

try {
    console.log(b);
    
} catch (error) {
    console.log(error);
}
let b = 20;
console.log(b);


//3. function hoisting

greet()

function greet(){
    console.log("hello from backend");
    
}


//4. function expression hoisting

try {
    heyfun()
} catch (error) {
    console.log(error);
    
}

let heyfun = function heyfun(){
    console.log("hey there");
    
}