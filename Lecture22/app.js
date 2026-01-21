{/*Understanding Set & Map in JavaScript */}

//set

const myset = new Set();

myset.add(20);
myset.add(30)
myset.add(20)

console.log(myset.has(20));
console.log(myset.delete(20));
myset.add(520)
console.log(myset.size);

for(let val of myset){
    console.log(val);
}


const tags = ['js','html','java','css']
const uniquetags = new Set(tags)
console.log(uniquetags);


//MAP

const map = new Map();

map.set('name','shubh');
map.set('age', 22);
console.log(map.get('name'));
console.log(map.size)
console.log(map.has('name'));
console.log(map);


for (let [key,value] of map){
    console.log(key,value);
    
}


const userScores = new Map();
userScores.set('shubh',98)
userScores.set('ran',85)
userScores.set('ajay',200)
console.log(userScores);


