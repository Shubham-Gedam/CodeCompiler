//Event Delegation for Performance Optimization & Event Bubbling


document.getElementById("grandParent").addEventListener('click',()=>{
    console.log("grand parent click");
})

document.getElementById("parent").addEventListener('click',()=>{
    console.log("parent click");
})

document.getElementById("child").addEventListener('click',()=>{
    console.log("child click");
})

const iff = document.getElementById("info")
iff.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
    console.log('clicked', e.target.textContent);
    
  }
    
})