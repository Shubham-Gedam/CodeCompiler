// console.log(a);

// var a = 10;

// function a() {}

// console.log(a);




// console.log(typeof x);

// let x = 5;


// console.log('A');

// setTimeout(() => console.log('B'), 0);

// Promise.resolve().then(() => console.log('C'));

// console.log('D');

// setTimeout(() => console.log('T1'), 0);


// for (let i = 0; i < 1e6; i++) {}

// console.log('X');


// for (var i = 0; i < 3; i++) {

// setTimeout(() => console.log(i), 0);

// }




// const obj = {

// value: 42,

// a: () => console.log(this.value),

// b: function () { console.log(this.value); }

// };

// obj.a();

// obj.b();




// Guess the Output ??

// function makeCounter() {

// let n = 0;

// return () => ++n;

// }

// const c1 = makeCounter();

// const c2 = makeCounter();

// console.log(c1());

// console.log(c1());

// console.log(c2());





// const user = {

// _age: 10,

// get age() { return this._age + 1; },

// set age(v) { this._age = v * 2; }

// };

// user.age = 20;

// console.log(user._age, user.age);




// class X {

// #v = 1;

// getV() { return this.#v; }

// }

// const x = new X();

// console.log('v' in x, x.getV());




// const data = { a: { b: 0 } };

// console.log( data.a?.b ?? 5 || 9 );





const { a = 1 } = { a: undefined };

console.log(a);






const { x = 10, y = 20 } = { x: undefined, y: null };

console.log(x, y);





// const [p, , q] = [1, 2, 3];

// console.log(p, q);




// const data = [" ", "", undefined];

// console.log(data.filter(item => item));