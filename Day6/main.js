const cities = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cidades = [];

fetch(cities)
    .then(blob => blob.json())
    .then(dados => cidades.push(...dados));

function parecidos(palavra, cidades) {
    return cidades.filter(lugar => {
        const regex = new RegExp(palavra, 'gi')
        return lugar.city.match(regex) || lugar.state.match(regex)
    })
}

function mostrarCidades () {
    const arrayCidades = parecidos(this.value, cidades)
    console.log()

    const html = arrayCidades.map(lugar => {

        const regex = new RegExp(this.value,'gi')
        const nomeCidade = lugar.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const nomeEstado = lugar.state.replace(regex, `<span class="hl">${this.value}</span>`)

        return `
        <li>
        <span class="name">${nomeCidade}, ${nomeEstado}</span>
        <span class="population">${numeroComVirgula(lugar.population)}</span>
        <li>
        `
    }).join('')
    sugestoes.innerHTML = html
}

function numeroComVirgula(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}


const inputUsuario = document.querySelector('.search')
const sugestoes = document.querySelector('.suggestions')

inputUsuario.addEventListener('change', mostrarCidades)
inputUsuario.addEventListener('keyup', mostrarCidades)
