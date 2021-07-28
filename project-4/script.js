const search=document.querySelector(".search");
const btn=document.querySelector(".btn");
const input=document.querySelector(".input");

btn.addEventListener("click",()=>{
    search.classList.toggle("active");//toggle metode add and remove in the same time class
    input.focus();//i put focus in my input
})
//@Github:Faiza-Berrichi
       // @2021*