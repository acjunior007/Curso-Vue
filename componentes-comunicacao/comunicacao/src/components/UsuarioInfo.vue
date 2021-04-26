<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário <strong>{{inverterNome()}}</strong> </p>
        <p>Idade do usuário {{ idade }}</p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFN">Reiniciar nome (callback) </button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            //required: true
            default: 'Anonimo'
        },
        idade: {
            type: Number
        },
        reiniciarFN: Function
    },
    // data() {
    //     return {
    //         nome: 'junior'
    //     }
    // },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            this.$emit('nomeMudou', "AC Junior");
        }
    },

    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        });
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
