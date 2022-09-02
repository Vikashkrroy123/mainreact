const mul=document.querySelector("#multi")
 mul.addEventListener('click', ranjan)
 export default function ranjan(){
   const t=parseInt(prompt("Enter first number"));
 const tt=parseInt(prompt("Enter second number"));
    mul.innerHTML=`${t*tt}`
    console.log(t*tt);
}