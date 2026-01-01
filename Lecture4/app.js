//var

// var a=20;
// var a =40
// console.log(a);


// let

// let a=30;
//  a=40;
//  console.log(a);
 

//const

// const a=20;
// a=30;
// console.log(a);



//Function Scope


function varExample(){
    if(true){
        var a=30;
    }
    console.log(a);
    
}
varExample()



//Block Scope

function letExample(){
    if(true){
        let b = 50;
        console.log(b);
    }
}
letExample()


//Examples 
/* value is not return each iteration {Function scope} */
for(var i=1; i<=5; i++){
    setTimeout(()=>{
        console.log(i);
    },3000)
}


/* value is return each iteration {Block scope} */
for(let i=1; i<=5; i++){
    setTimeout(()=>{
        console.log(i);
    },3000)
}