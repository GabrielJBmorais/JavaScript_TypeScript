function verifHora(data) {

    if (data    && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de Date');
    }

    if (!date) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
    )

}
''
try{
    const data = new Date("01-01-1970 12:58:12")
    const hora = verifHora(data);
    console.log(hora)
}catch{
    //trata erros
}finally{
    console.log('Tenha um bom dia');
}