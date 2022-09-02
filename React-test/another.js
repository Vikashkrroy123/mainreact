 const plus=document.querySelector("#add")
 plus.addEventListener('click', vikash)
 export default function vikash(){
   const a=parseInt(prompt("Enter first number"));
 const b=parseInt(prompt("Enter second number"));
    plus.innerHTML=`${a+b}`
    console.log(a+b);
}
