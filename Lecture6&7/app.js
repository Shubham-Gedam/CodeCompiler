function CreateCounter (){
    let count =0;
    return function(){
        count++
        return count;
    }
}
const counter = CreateCounter()
console.log(counter());
console.log(counter());
console.log(counter());
