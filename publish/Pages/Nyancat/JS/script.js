var audioplay = false; 

function Triggered(){
    const Background = document.getElementsByClassName("background");
    const NyanCat_1 = document.getElementsByClassName("NyanCat");
    const NyanCat_2 = document.getElementsByClassName("NyanSpeed_1");
    const NyanCat_3 = document.getElementsByClassName("NyanSpeed_2");
    const ButtonTrigger = document.getElementsByClassName("ButtonTrigger");
    const nyan_title = document.getElementsByClassName("NyanCat_Title");
    const nyan_audio = document.getElementsByClassName("audio_nyan"); 
     

    Background[0].classList.toggle("body_triggered");
    NyanCat_1[0].classList.toggle("TriggerSpeed_1");
    NyanCat_2[0].classList.toggle("TriggerSpeed_2");
    NyanCat_3[0].classList.toggle("TriggerSpeed_3");
    ButtonTrigger[0].classList.toggle("Buttongetriggert");
    nyan_title[0].classList.toggle("NyanCat_Title_triggered");
    nyan_audio[0].classList.toggle("audio_nyan_triggered");

    if(audioplay == false){
        nyan_audio[0].play();
    }
    
    if(audioplay == true){
        nyan_audio[0].pause();
    }

    audioplay = !audioplay;
    
console.log(audioplay);
}