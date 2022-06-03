const toggles=document.querySelectorAll(".toggle-checkbox");
const good=document.querySelector("#good");
const cheap=document.querySelector("#cheap");
const fast=document.querySelector("#speed");
toggles.forEach(toggle=>toggle.addEventListener("change",(e)=>
    dotheTrick(e.target)))
function dotheTrick(theClickDone){
    if(good.checked && cheap.checked && fast.checked){
        if(good===theClickDone){
            fast.checked=false;
        }
        if(cheap===theClickDone){
            good.checked=false;
        }
        if(fast===theClickDone){
            cheap.checked=false;
        }

    }
}