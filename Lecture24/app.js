// function orderFood(isRestaurantOpnen){
//     return new Promise((resolve, reject) => {
//         console.log("placing order...");
//         setTimeout(() => {
//             if(isRestaurantOpnen){
//                 resolve ('Order Recieved')
//             }else{
//                 reject ('Restaurant is closed')
//             }
//         }, 2000);
//     })
// }

// orderFood(false).then((res)=>{
//     console.log(res);
//     return 'preparing food..'
// }).then((res)=>{
//     console.log(res);
//     return "Out of delivery food"
// }).then((res)=>{
//     console.log(res);  
// }).catch((error)=>{
//     console.log("error", error);
// }).finally(()=>{
//     console.log("thanks for ordering food..");
    
// })

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error", error);
})