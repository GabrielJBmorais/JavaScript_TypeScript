const data = new Date();

const diaSemana = data.getDay();

let diaText;



switch(diaSemana)
{
    case 0 : diaText = 'Domingo';
    break;
    case 1: diaText = 'Segunda';
    break;
    case 2: diaText = 'Terça';
    break;
    case 3: diaText = 'Quarta';
    break;
    case 4: diaText = 'Quinta';
    break;
    case 5: diaText = 'Sexta';
    break;
    case 6: diaText = 'Sabádo';
    break;
}

console.log(diaText);