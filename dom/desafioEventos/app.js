new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("Exibindo um alerta maneiro....");
        },

        escutarEvento(e){
            this.valor = e.target.value;
        }
    }
})