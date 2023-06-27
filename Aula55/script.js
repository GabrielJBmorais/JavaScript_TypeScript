let frutas = ["banana", "maçã", "manga"];

for (let indice in frutas){
    console.log(indice);
    console.log(frutas[indice]);


}

for(let i of frutas){
    console.log((i))
}

frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array)
}) 