const boxes= document.querySelectorAll('.box');
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes(){
 const triggerBottom=window.innerHeight /5*4;
 boxes.forEach(box => {
     
const boxTop= box.getBoundingClientRect().top//methode native js position of boxes

   if(boxTop<triggerBottom){
       box.classList.add("show");
   }else{
       box.classList.remove("show");
   }
 })
}

//@Github:Faiza-Berrichi
       // @2021*