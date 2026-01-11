//Shallow & Deep Copy in JavaScript

const originalObj = {
    name: "shubh",
    address: {city:"delhi"}
}

// const shalloCopy = Object.assign({},originalObj)
const shalloCopy = { ...originalObj}
// console.log(shalloCopy);


originalObj.address.city = "amt"
console.log(originalObj.address.city);


const deepCopy = JSON.stringify(originalObj);
// console.log(deepCopy);


const deepCopy1 = JSON.parse(JSON.stringify(originalObj));
// console.log(deepCopy1);

console.log(deepCopy1.address.city);
