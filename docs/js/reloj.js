const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana} ${dia} ${mes} ${anio}`
    document.getElementById('fecha').innerHTML = fechaTexto;
}

const formatoHora = (hora) => {
    if(hora < 10){
        hora +='0';
    }
    return hora;
}

setInterval(() => {
    mostrarReloj();
}, 1000);