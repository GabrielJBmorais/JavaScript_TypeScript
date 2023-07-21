const input = document.querySelector(".input")
const button = document.querySelector(".addtask")
const tarefas = document.querySelector(".tarefas")

function criaLi() {
    const li = document.createElement('li');
    return li;
}


input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!input.value) return;
        criaTarefa(input.value)

    }
})

function btDelete(li) {
    li.innerText += ' ';
    const btDelete = document.createElement('button')
    btDelete.innerText = "Apagar;"
    btDelete.setAttribute('class', 'apagar');
    li.appendChild(btDelete);
}

function limpaTarefa() {
    input.value = "";
    input.focus();
}

function criaTarefa(text) {
    const li = criaLi();
    li.innerText = text;
    tarefas.appendChild(li)
    limpaTarefa();
    btDelete(li);
    salvarTarefa();
}

button.addEventListener("click", function () {

})


function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaText = tarefa.innerText;
        tarefaText = tarefaText.replace('Apagar', '').trim();
        listaTarefas.push(tarefaText);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adiconaTarefas(){
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas);

    for(let tarefa  of listadeTarefas){
        criaTarefa(tarefa);
    }
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();

    }
})

adiconaTarefas();