const obj = { a: { b: 1 } };

const c1 = { ...obj };

c1.a.b = 2;

console.log(obj.a.b);



// const obj = { a: { b: 1 } };

// const c2 = structuredClone(obj);

// c2.a.b = 2;

// console.log(obj.a.b);



// .
// Guess the Output ?

console.log([1,2,3].map(x => x*2).filter(x => x > 3).reduce((a,b) => a+b, 0));




// console.log('a,b,,c'.split(',').join('-'));



// .
// Guess the Output ?

// const arr = [5,12,8,130,44];

// console.log( arr.find(x => x > 10), arr.findIndex(x => x > 100) )




// const nums = [1,2,3,4];

// console.log(nums.splice(1, 2, 9), nums, nums.slice(1, 3));





// .
// Guess the Output ?

function add(y, z) { return this.x + y + z; }

const obj2 = { x: 10 };

const f = add.bind(obj2, 5);

console.log( f(2), add.call({x:1}, 2, 3), add.apply({x:2}, [3,4]) );





// .
// Guess the Output ?

function A() {}

A.prototype.g = () => 'G';

const a = new A();

console.log(a.g(), Object.getPrototypeOf(a) === A.prototype);




// console.log( Boolean([]), Boolean(''), !!null, !!'0' );






// const sum = (...args) => args.reduce((a,b) => a+b, 0);

// const a1 = [1,2], a2 = [3,4];

// console.log( sum(...a1, ...a2) );






// const a = 0, b = 2;

// console.log( a || (b > 1 ? 'yes' : 'no') && 'ok' );





// const s = new Set([1,2,2,3]);

// const m = new Map([[1,'a']]);

// m.set({}, 'x');

// console.log(s.size, m.has(1), m.size);









// Guess the Output ?

// document.body.addEventListener('click', () => console.log('body'));

// const div = document.createElement('div');

// document.body.appendChild(div);

// div.addEventListener('click', () => console.log('div'));

// div.click();







// Promise.resolve(1)

// .then(x => x + 1)

// .then(x => { throw x; })

// .catch(x => x + 1)

// .then(console.log);




// async function f() {

// try { return await Promise.reject('err'); }

// catch (e) { return 'caught'; }

// finally { console.log('finally'); }

// }

// f().then(console.log);