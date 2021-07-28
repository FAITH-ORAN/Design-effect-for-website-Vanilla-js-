const open=document.getElementById("open");
const close=document.getElementById("close");
const container=document.querySelector(".container");

open.addEventListener("click",()=>container.classList.add("show-nav") );// i add class show nav when i click on open button
close.addEventListener("click",()=>container.classList.remove("show-nav") )//i remove class shwi nav when i click on close button

//@Github:Faiza-Berrichi
       // @2021*