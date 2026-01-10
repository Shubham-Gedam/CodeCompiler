//Destructuring in javascript (object and array)
const User = {
    name:"shubh",
    age: 23,
    location:"amt"
}

// const user = User.name;
// console.log(user);

const {name,age }= User
console.log(name,age);

const {email = "not provided"} = User
console.log(email);

const colors = ['red', 'pink', 'green'];

const [first, second] = colors;
console.log(first, second);

const [, , third] = colors;
console.log(third);
