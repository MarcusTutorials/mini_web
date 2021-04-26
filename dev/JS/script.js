import jump from '../../node_modules/jump.js/dist/jump.js'
// import Scrollbar from '../../node_modules/smooth-scrollbar/dist/smooth-scrollbar.js'

// Scrollbar.init(document.querySelector('.Smooth'));



const BGSection = document.getElementsByClassName('BGContainer');
var delayAnim = 0;
var Anzahl_Blocks = 600;

for (i = 1; i < Anzahl_Blocks; i++) {

    var createDiv = document.createElement("div");


    createDiv.classList.add("BGBox")
    createDiv.style.animationDelay = delayAnim + "ms";
    BGSection[0].appendChild(createDiv);
    delayAnim += 3
}



const buttonScroll = document.getElementsByClassName('Pfeil')

buttonScroll[0].addEventListener("click", () =>{
    ziel = document.getElementById('Gallery')


    jump(ziel, {
        duration: 400,
      });
})