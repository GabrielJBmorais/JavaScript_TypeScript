function calc() {

    const form = document.querySelector('.form');


    form.addEventListener('submit', function(evento){ 

        evento.preventDefault();

        const inputPeso = evento.target.querySelector('.input1');

        const inputAltura = evento.target.querySelector('.input2');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        console.log(peso, altura)

        if(!peso && !altura){
            return setResultado(`Valores inválidos`, false)
        }

        if(!peso){
            return setResultado(`Peso inválido`, false)
        }

        if(!altura){
            return setResultado(`Altura inválida`, false)
        }
        

        const imc = getImc(peso, altura);
                 
        console.log(imc)

        setResultado(`${imc} ${nivelImc(imc)}`)
            
                   
        }
    )
        
    }

    


    function nivelImc(imc){
        const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

        if(imc >= 39.9)return nivel[5];

        if(imc >= 34.9)return nivel[4];
        
        if(imc >= 29.9)return nivel[3]
        
        if(imc >= 24.9)return nivel[2]
        
        if(imc >= 19.9)return nivel[1]
        
        if(imc < 19.9)return nivel[0]
        

    }

    function getImc(peso, altura){
       const imc = peso / (altura ** 2);
     
       return imc.toFixed(2);

    }


    function setResultado(msg, valido){

        const result = document.querySelector('#result');

        result.innerHTML='';

        const p = document.createElement('p');

        if(valido){
        p.classList.add("p-resultado");
        }else{
            p.classList.add("erro-result");
        }
        p.innerHTML=`${msg}`;
        result.appendChild(p);
    }

    


calc();