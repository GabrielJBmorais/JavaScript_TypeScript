//Função para formatar os segundos
function getSeconds(seconds) {
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })

}


const container = document.querySelector('.container');
const timer = container.querySelector('.timer')
const iniciar = container.querySelector('.iniciar')
const pausar = container.querySelector('.pausar')
const zerar = container.querySelector('.zerar')

let segundos = 0;
let contador;

function startTimer() {
    contador = setInterval(function () {
        segundos++;
        timer.innerHTML = getSeconds(segundos);

    }, 1000)
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        clearInterval(contador);
        contador = 0;
        timer.innerHTML = '00:00:00';
        timer.classList.remove('pausado');
    }

    if (el.classList.contains('iniciar')) {
        timer.classList.remove('pausado')
        clearInterval(contador);
        startTimer();
    }

    if (el.classList.contains('pausar')) {
        timer.classList.add('pausado')
        clearInterval(contador);
    }
})





