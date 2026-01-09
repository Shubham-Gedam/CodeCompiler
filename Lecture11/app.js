// const User = {
//     name:'shubh',
//     // address:{
//     //     city:'delhi',
//     //     pincode:'112233'
//     // },
//     preferences: null
// }

// const city = User?.address?.city
// console.log(city);


const User = {
    name:'shubh',
    // getdata: function (){
    //     return this.name
    // },
    preferences: null
}

// console.log(User.getdata());
// console.log(User.getdata?.());


const pref = User.preferences ?? "prefff user it";
console.log(pref);

const quantity = 0;
const result = quantity || 10
console.log(result);
