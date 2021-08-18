function attTempo (){
    let horario = new Date();
    let hora = horario.getHours()*30-90;
    let minutos = horario.getMinutes()*6-90;
    let segundos = (horario.getSeconds()*6)-90;
    
    let pHora = document.querySelector(".ponteiroHora");
    let pminuto = document.querySelector(".ponteiroMinuto");
    let pSegundo = document.querySelector(".ponteiroSegundo");

    pHora.style.transform = `rotate(${hora}deg)`
    pminuto.style.transform = `rotate(${minutos}deg)`
    pSegundo.style.transform = `rotate(${segundos}deg)`

    console.log(horario.getSeconds())
};

setInterval(attTempo, 1000);