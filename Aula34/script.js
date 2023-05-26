function  escopo(){

    const form = document.querySelector('.form');
    const result = document.querySelector('#result');
    
    const array = [];

    
/*
    form.onsubmit = function submit(evento){

        evento.preventDefault();
    }
*/
    function formEvent(evento){

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobre');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

       array.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       })

       console.log(array)

       result.innerHTML +=`<p>${nome.value} , ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
            
        }

        form.addEventListener('submit', formEvent);

    }

escopo();