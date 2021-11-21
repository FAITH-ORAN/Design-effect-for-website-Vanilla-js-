const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

const clear=document.getElementById("clear");
clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

let spanSize=document.getElementById("size")
let color="black"

let colorX=document.getElementById("color");
colorX.addEventListener('input', function() {
color=colorX.value;
})

let increase=document.getElementById("increase");
increase.addEventListener("click", function() {
    spanSize.textContent=size++;
})

let decrease=document.getElementById("decrease");
decrease.addEventListener("click", function() {
    spanSize.textContent=size--;
})


let size=20
let isPressed=false
let x
let y

canvas.addEventListener("mousedown",(e)=>{
   isPressed=true;
   x=e.offsetX
   y=e.offsetY

   
})


canvas.addEventListener("mouseup",(e)=>{
    isPressed=false;
    x=undefined
    y=undefined;
 
    
 })

 canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        const x2=e.offsetX
        const y2=e.offsetY

       drawCircle(x2,y2)
       drawLine(x,y,x2,y2)
       x=x2
       y=y2
    }
 })

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0, Math.PI*2);
    ctx.fillStyle=color
    ctx.fill();

}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle= color;
    ctx.lineWidth=size*2
    ctx.stroke()
}

