// function CreateCounter (){
//     let count =0;
//     return function(){
//         count++
//         return count;
//     }
// }
// const counter = CreateCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());


function outer() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

let funcs = outer();
funcs[0]();
funcs[1]();
funcs[2]();