new Vue({
    el: "#desafio",
    data: {
        nome: "AC Junior 007",
        idade: 42,
        img: "logo.png"
    },
    methods: {
        inicializar() {
            return this.nome
        }
    }
})