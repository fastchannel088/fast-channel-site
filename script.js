const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");nav.style.display=open?"flex":"none";menu.setAttribute("aria-expanded",open)});}
document.getElementById("year").textContent=new Date().getFullYear();