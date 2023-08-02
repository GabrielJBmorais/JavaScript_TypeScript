function Calc() {

    const display = document.querySelector('.display')

    this.realizaConta = function () {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta Invalida");
                return
            }

            display.value = String(conta);
        } catch (e) {
            alert("Conta Inválida");
            return;
        }
    }


    this.clearDisplay = function(){
        display.value = " "
    }

    this.apagaUM = function(){
        display.value = display.value.slice(0, -1);
    }


    this.inicia = function(){
        this.cliqueBotoes();
        this.pressionaEnter();

    }

    this.pressionaEnter = function(){
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.cliqueBotoes = function(){
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUM();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
    }

    this.btnParaDisplay = function(valor){
        display.value += valor;
    }

};


const calculadora = new Calc();

calculadora.inicia();

