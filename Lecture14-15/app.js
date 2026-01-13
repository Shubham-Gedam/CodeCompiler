const users = [
    {id:1, name:"shubh",age:22, price:30},
    {id:2, name:"rudu",age:8, price:88},
    {id:3, name:"rohit",age:23, price:10},
    {id:4, name:"shubham",age:20, price:200},

]

//Map method
const names = users.map((user)=>{
    return user.name.toUpperCase()
})
console.log(names);

//sort hand method
console.log(users.map(user => user.name.toUpperCase()));


//filter method

const age = (users.filter(user=> user.age > 10));
console.log(age);


//method chaning
const result = users.filter(user => user.age > 10 ).map(user => user.name.toUpperCase())
console.log(result);


//join  //method this method convert array to string
const nameString = names.join(', ')
console.log(nameString);



//split //method this method convert string to Array
const nameArray = nameString.split(",")
console.log(nameArray);



//find 
const name = users.find(user => user.age > 20);
console.log(name);


//findIndex
const nameIndex = users.findIndex(user => user.name === 'rohit');
console.log(nameIndex);


//reduce 
const total = (users.reduce((sum , item)=> sum + item.price,0))
console.log(total);
