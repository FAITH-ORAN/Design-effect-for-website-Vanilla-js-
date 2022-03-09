const loveMe=document.querySelector(".loveMe");
const times=document.getElementById("times");
times.style.color="red";

let clickTime=0;
let timesClicked=0;
loveMe.addEventListener("click",(e)=>{
    if(clickTime===0){
        clickTime=new Date().getTime()
        // console.log(clickTime)
    }else{
        if((new Date().getTime()-clickTime)<800){
            createHert(e)
            clickTime=0;
        }else{
            clickTime=new Date().getTime();
        }
    }
})

const createHert=(e)=> {
    const heart=document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    const x=e.clientX;
    const y=e.clientY;

    const leftOffset=e.target.offsetLeft
    const topOffset=e.target.offsetTop

    const xInside=x - leftOffset
    const yInside=y - topOffset
    // console.log(xInside,yInside);
    heart.style.top=`${yInside}px`
    heart.style.left=`${xInside}px`
    loveMe.appendChild(heart)
    times.innerText= ++timesClicked;

    setTimeout(()=>heart.remove(),1000)
}