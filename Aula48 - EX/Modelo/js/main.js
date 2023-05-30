function day(){

    const day = new Date();

    let dayText;
    let monthText;
    let minutes = (day.getMinutes < 10) ? `0${day.getMinutes()}` : day.getMinutes();

    switch(day.getDay()){
        case 0: dayText = 'Domingo';
        break;
        case 1: dayText = 'Segunda-feira';
        break;
        case 2: dayText = 'Terça-feira';
        break;
        case 3: dayText = 'Quarta-feira';
        break;
        case 4: dayText = 'Quinta-feira';
        break;
        case 5: dayText = 'Sexta-feira';
        break;
        case 6: dayText = 'Sabádo';
        break;
    }

    switch(day.getMonth()){
        case 0: monthText = 'Janeiro';
        break;
        case 1: monthText = 'Fevereiro';
        break;
        case 2: monthText = 'Março';
        break;
        case 3: monthText = 'Abril';
        break;
        case 4: monthText = 'Maio';
        break;
        case 5: monthText = 'Junho';
        break;
        case 6: monthText = 'Julho';
        break;
        case 7: monthText = 'Agosto';
        break;
        case 8: monthText = 'Setembro';
        break;
        case 9: monthText = 'Outubro';
        break;
        case 10: monthText = 'Novembro';
        break;
        case 11: monthText = 'Dezembro';
        break;
    }




    write(`${dayText}, ${day.getDate()} de ${monthText} de ${day.getFullYear()} ${day.getHours()}:${minutes}`)

}






function write(msg){
    const print = document.querySelector('#result');

    const p  = document.createElement('p');

    p.innerHTML=`${msg}`

    print.appendChild(p);

    
    
}

day();