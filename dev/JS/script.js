import jump from '../../node_modules/jump.js/dist/jump.js'

//Create BG
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


//Button Jump to
const buttonScroll = document.getElementsByClassName('Pfeil')

buttonScroll[0].addEventListener("click", () =>{
    ziel = document.getElementById('Gallery')
    jump(ziel, {
        duration: 400,
      });
})