function tirarTransicao(evento){
    if (evento.propertyName !== "transform") return;
    this.classList.remove("tocando")
};

function tocar(evento){
    audio = document.querySelector(`audio[data-key="${evento.keyCode}"]`);
    tecla = document.querySelector(`.tecla[data-key="${evento.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    
    tecla.classList.add("tocando")
}




window.addEventListener("keydown", tocar);

const teclas = document.querySelectorAll(".tecla")
teclas.forEach(tecla => tecla.addEventListener("transitionend", tirarTransicao))
