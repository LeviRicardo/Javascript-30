function atualizar(){
    const sufixo = this.dataset.unidade || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+sufixo)
}

const inputs = document.querySelectorAll(".controles input")

inputs.forEach( input => input.addEventListener("change", atualizar))
inputs.forEach( input => input.addEventListener("mousemove", atualizar))