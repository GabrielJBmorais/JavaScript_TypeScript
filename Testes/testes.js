/*const n = 100;

console.log(Number.isNaN(n))*/

let contador = 0

function seconds(){
    
        contador++
        console.log(contador)  
}

let timer = setInterval(seconds, 1000);

setTimeout(setInterval(timer), 4000);