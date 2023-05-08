// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    
    document.getElementById("voice-select").appendChild(option);
  }
  
}