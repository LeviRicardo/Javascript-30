function alternarAbrir() {
    this.classList.toggle("aberto")
}

function alternarAtivo(evento){
    if (evento.propertyName.includes("flex-grow")){
        this.classList.toggle("aberto-ativo")
    }
    
}


const paineis = document.querySelectorAll(".painel")

paineis.forEach(painel => painel.addEventListener('click', alternarAbrir))
paineis.forEach(painel => painel.addEventListener('transitionend', alternarAtivo))