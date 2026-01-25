function slowAdd(a,b){
    for(let i=0; i<1e8; i++){}
    return a+b;
}

console.time("no memo");
console.log(slowAdd(5,10));
console.timeEnd("no memo");

console.time("NO MEMO again");
console.log(slowAdd(5,10));
console.timeEnd("NO MEMO again");


function memoiozednAdd(){
    const cache = {}
    return function(a,b){
        const key = `${a},${b}`;
        if(cache[key]){
            return cache[key];
        }
        for(let i=0; i<1e8; i++){}
        const result = a+b;
        cache[key] = result;
        return result;
    }
}

const add = memoiozednAdd();

console.time("MEMO");
console.log(add(5,10));
console.timeEnd("MEMO");

console.time("MEMO again");
console.log(add(5,10));
console.timeEnd("MEMO again");