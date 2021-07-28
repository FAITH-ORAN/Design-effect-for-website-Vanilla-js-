const panels=document.querySelectorAll('.panel')
panels.forEach((panel)=>{//loop on every cards
    console.log(panel)
  panel.addEventListener("click",()=>{//add a click event
    removeActiveClasses()
    panel.classList.add("active");//when i click i add a class style 'active '
  })//
})
function removeActiveClasses(){
    panels.forEach((panel)=>{//when i click in other cards i remove active class on the others panel
        panel.classList.remove("active")
    })
}

//code html
let btn= document.getElementById("html");
btn.addEventListener("click",getCopy);
function getCopy(){
  var content =`<!DOCTYPE html >
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Cartes extensibles</title>
  </head>
  <body>
     <div class="container">
         <div class="panel active" style="background-image: url('https://images.unsplash.com/photo-1483422166412-1d8a821cd97c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')">
             <h3>Explorer le monde</h3>
         </div>
         <div class="panel" style="background-image:url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80')">
             <h3>les plages</h3>
         </div>
         <div class="panel" style="background-image:url('https://images.unsplash.com/photo-1528158520601-740f1b8709a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')">
          <h3>les forets</h3>
         </div> 
         <div class="panel" style="background-image:url('https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')">
             <h3>les deserts</h3>
         </div>
         <div class="panel" style="background-image:url('https://images.unsplash.com/photo-1504027811305-98452c2ef4fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80')">
             <h3>la neige</h3>
         </div>
     </div>
     <div class="flex"> <p>copies des codes:</p>
      
       <i class="fa fa-copy" id="html">Html</i></div>
       <div>Hello</div>
     
    
    
     <script src="script.js"></script>
  </body>
  </html> `;

  navigator.clipboard.writeText(content)
      .then(() => {
      alert("code Html copié")
  })
      .catch(err => {
      alert('désolé une erreur s\'est produite');
  })

}
//code css
let btnCss= document.getElementById("css");
btnCss.addEventListener("click",getCopyCss);

function getCopyCss(){
  var contentText =`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
   box-sizing: border-box; 
}
body{
    font-family: 'Roboto', sans-serif;
 ;
    height: 100vh;
    Overflow: hidden;
    margin:0;
}
.container{
    display:flex;
    width:90vw;
}
.panel{
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    height:80vh;
    border-radius: 50px;
    color:#fff;
    cursor:pointer;
    flex:0.5;
    margin:10px;
    position:relative;
    transition:flex 0.7s ease-in;
    
}

.panel h3{
    font-size:24px;
    position:absolute;
    bottom:20px;
    left:20px;
    margin:0;
    opacity:0;
}

.panel.active{
    flex:1;
}
.panel.active h3{
    opacity:1;
    transition:opacity 0.3s ease-in 0.4s;
}
.flex{
    margin: 15px;
}
.space{
    width:50%;
    display:flex;
    justify-content:space-between
}
.flex i{
    font-size:20px;
    cursor: pointer;
}

@media (max-width:480px){
    .flex{
        display: none;
    }
    .container{
        width:100vw; 
    }
    .panel:nth-of-type(4),.panel:nth-of-type(5){
        display:none;
    }
}
  `;
  navigator.clipboard.writeText(contentText)
      .then(() => {
      alert("code Css copié")
  })
      .catch(err => {
      alert('désolé une erreur s\'est produite');
  })

}

//js code
let btnJs= document.getElementById("js");
btnJs.addEventListener("click",getCopyJs);

function getCopyJs(){
  var contenttextJs =`
  const panels=document.querySelectorAll('.panel')
  panels.forEach((panel)=>{//loop on every cards
  console.log(panel)
  panel.addEventListener("click",()=>{//add a click event
    removeActiveClasses()
    panel.classList.add("active");//when i click i add a class style 'active '
  })
})
function removeActiveClasses(){
    panels.forEach((panel)=>{//when i click in other cards i remove active class on the others panel
        panel.classList.remove("active")
    })
}
  `;
  navigator.clipboard.writeText(contenttextJs)
      .then(() => {
      alert("code JS copié")
  })
      .catch(err => {
      alert('désolé une erreur s\'est produite');
  })

}
//@Github:Faiza-Berrichi
       // @2021*