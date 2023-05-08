// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //Change image on dropdown select and also change audio
  const dropdown = document.getElementById("horn-select");
  const image = document.getElementsByTagName("img")[0];
  const audio = document.getElementsByTagName("audio")[0];
  audio.volume = .5

  dropdown.addEventListener("change", (event) =>{
    if(event.target.value == "air-horn"){
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    if(event.target.value == "party-horn"){
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    if(event.target.value == "car-horn"){
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
  });

  //change volume icon on slider input and account play sound at volume
  const slider = document.getElementById("volume");
  const icon = document.getElementsByTagName("img")[1];
  const button = document.querySelector("button");
  slider.addEventListener("input", (event) => {
    if(slider.value == 0){
      icon.src = "assets/icons/volume-level-0.svg";
    }
    if(slider.value > 0 && slider.value < 33){
      icon.src = "assets/icons/volume-level-1.svg";
    }
    if(slider.value >= 33 && slider.value < 67){
      icon.src = "assets/icons/volume-level-2.svg";
    }
    if(slider.value >= 67){
      icon.src = "assets/icons/volume-level-3.svg";
    }

    
    audio.volume = slider.value / 100;
  });

  const jsConfetti = new JSConfetti();
  button.addEventListener("click", (event) => {
    audio.play();
    if(image.src == "assets/images/party-horn.svg"){
      jsConfetti.addConfetti();
    }
  })


}
