<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed:{
        // quantidade() {
        //     return this.$store.state.parametros.quantidade
        // },
        // preco() {
        //     return this.$store.state.parametros.preco
        // }
        quantidade :{
            get() {
                return this.$store.state.parametros.quantidade
            },
            set(valor) {
                this.$store.commit('setQuantidade', valor)
            }
        },
        preco : {
            get() {
                return this.$store.state.parametros.preco
            },
            set(valor) {
                this.$store.commit('setPreco', valor)
            }
        }        
    },
    methods: {
        // cria um metodo chamado adicionarProduto dentro de methods, e assim, pode chamar direto 
        // como se existisse o metodo adicionarProduto, mas esta mapeando o metodo que esta em 
        // mutations no arquivo store
        //...mapMutations(['adicionarProduto']),

        // usando actions ao inves de mutations
        // 'carrinho' é o nome do namespaced, configurado no arquivo carrinho.js
        ...mapActions('carrinho', ['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            //this.$store.state.produtos.push(produto);
            // ou
            //this.$store.commit('adicionarProduto', produto);

            // this.$store.dispatch('adicionarProduto', produto);
            // ou    
            this.adicionarProduto(produto);
            
            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)

        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
