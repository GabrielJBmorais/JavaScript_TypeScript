function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false

    })

}

const hora = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(hora)
}, 5000)