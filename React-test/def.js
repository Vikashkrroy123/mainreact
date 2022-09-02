const div=document.querySelector("#divide")
 div.addEventListener('click', komal)
 export default function komal(){
   const g=parseInt(prompt("Enter first number"));
 const l=parseInt(prompt("Enter second number"));
    div.innerHTML=`${g/l}`
    console.log(g/l);
}