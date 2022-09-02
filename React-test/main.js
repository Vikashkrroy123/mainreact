const minus=document.querySelector("#minus")
minus.addEventListener('click', beauty)
export default function beauty(){
    const m=parseInt(prompt("Enter 1st"));
    const n =parseInt(prompt("Enter 2nd"));
    minus.innerHTML=`${m-n}`
    console.log(m-n);
  }
  