const progress= document.getElementById("progress");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const circle=document.querySelectorAll(".circle");

let currentActive= 1;
next.addEventListener("click",()=>{//go until 4th circle and stop 
    currentActive++;
    if(currentActive>circle.length){
        currentActive=circle.length;
    }
  update();
})
prev.addEventListener("click",()=>{//prev until button 1 and stop
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
  update();
})

function update(){ //function update loop on circles to add or remove class active
    circle.forEach((circle,idx)=>{
      if(idx <currentActive){
          circle.classList.add("active")
      }else{
          circle.classList.remove("active")
      }
    })
 const actives= document.querySelectorAll(".active")
 progress.style.width=(actives.length-1)/ (circle.length-1)*100+"%";

 if (currentActive===1){
     prev.disabled=true;
 }else if (currentActive=== circle.length){
     next.disabled= true;
 }else{
     prev.disabled=false;
     next.disabled= false;
 }

}
//@Github:Faiza-Berrichi
       // @2021*