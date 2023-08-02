function criaCalc(){
    return{

        display: document.querySelector('.display'),

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta Invalida");
                    return
                }
                
                this.display.value = String(conta);
            }catch(e){
                alert("Conta Inválida");
                return;
            }
        },


        clearDisplay(){
           this.display.value = " "  
        },

        apagaUM(){
            this.display.value = this.display.value.slice(0, -1);
        },


        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13 ){
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUM();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalc();[
    calculadora.inicia()
]

