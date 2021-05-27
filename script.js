let button=document.querySelector("button");
let h2=document.querySelector("h2");


 button.addEventListener("click",function(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
     let color=`rgb(${r},${g},${b})`;
     document.body.style.backgroundColor=color;
     h2.innerHTML=`background color:${color}`;
 })
 
