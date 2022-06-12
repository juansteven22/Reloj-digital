
const $tiempo =document.querySelector('.tiempo'),
$fecha =document.querySelector('.fecha');

function digitalClock(){
    let f=new Date(), //creamos una variable dia
    dia=f.getDate(),
    mes=f.getMonth()+1,
    agno=f.getFullYear(),
    diaSemana=f.getDay();

    dia=('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2);

    let timeString =f.toLocaleTimeString();
    $tiempo.innerHTML=timeString;

    let semana=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
    let showSemana=(semana[diaSemana-1])
    $fecha.innerHTML=`${agno}-${mes}-${dia}-${showSemana}`;
}

setInterval(() =>{ digitalClock()}, 1000);